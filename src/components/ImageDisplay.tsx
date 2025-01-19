import React, { useState, useEffect } from 'react';

const Base64Converter: React.FC = () => {
    const [decodedContent, setDecodedContent] = useState<string>('');
    const [isImage, setIsImage] = useState<boolean>(false);

    useEffect(() => {
        try {
            // The Base64 encoded string
            const base64String = `IyBNaWdyYXRpbmcgbXkgcmVhbEVzdGF0ZSBwcm9qZWN0IGZyb20gbm9kZSB0
byBzcHJpbmdib290CioqKgojIAoKWyFbQnVpbGQgU3RhdHVzXShodHRwczov
L3RyYXZpcy1jaS5vcmcvY29kZWNlbnRyaWMvc3ByaW5nYm9vdC1zYW1wbGUt
YXBwLnN2Zz9icmFuY2g9bWFzdGVyKV0oaHR0cHM6Ly90cmF2aXMtY2kub3Jn
L2NvZGVjZW50cmljL3NwcmluZ2Jvb3Qtc2FtcGxlLWFwcCkKWyFbQ292ZXJh
Z2UgU3RhdHVzXShodHRwczovL2NvdmVyYWxscy5pby9yZXBvcy9naXRodWId
Y29kZWNlbnRyaWMvc3ByaW5nYm9vdC1zYW1wbGUtYXBwL2JhZGdlLnN2Zz9i
cmFuY2g9bWFzdGVyKV0oaHR0cHM6Ly9jb3ZlcmFsbHMuaW8vZ2l0aHViL2Nv
ZGVjZW50cmljL3NwcmluZ2Jvb3Qtc2FtcGxlLWFwcD9icmFuY2g9bWFzdGVy
KQpbIVtMaWNlbnNlXShodHRwOi8vaW1nLnNoaWVsZHMuaW8vOmxpY2Vuc2Ut
YXBhY2hlLWJsdWUuc3ZnKV0oaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vu
c2VzL0xJQ0VOU0UtMi4wLmh0bWwpCgojIyBUYWJsZSBvZiBDb250ZW50cwoK
LSBbUHJvamVjdCBPdmVydmlld10oI3Byb2plY3Qtb3ZlcnZpZXcpCi0gW1Rl
Y2hub2xvZ2llcyBVc2VkXSgjdGVjaG5vbG9naWVzLXVzZWQpCi0gW0FQSSBF
bmRwb2ludHNdKCNhcGktZW5kcG9pbnRzKQotIFtSZXF1ZXN0IGFuZCBSZXNw
b25zZSBGb3JtYXRzXSgjcmVxdWVzdC1hbmQtcmVzcG9uc2UtZm9ybWF0cykK
LSBbSW5zdGFsbGF0aW9uIGFuZCBTZXR1cF0oI2luc3RhbGxhdGlvbi1hbmQt
c2V0dXApCi0gW1VzYWdlXSgjdXNhZ2UpCi0gW0NvbnRyaWJ1dGluZ10oI2Nv
bnRyaWJ1dGluZykKLSBbTGljZW5zZV0oI2xpY2Vuc2UpCgojIyBQcm9qZWN0
IE92ZXJ2aWV3CgpUaGUgcHJvamVjdCB3YXMgaW5pdGlhbGx5IGRldmVsb3Bl
ZCB1c2luZyBOb2RlLmpzIGFuZCBoYXMgYmVlbiBtaWdyYXRlZCB0byBTcHJp
bmcgQm9vdCB3aXRoIEphdmEuIFRoaXMgQVBJIHNlcnZlcyBhcyB0aGUgYmFj
a2VuZCBmb3IgYSByZWFsIGVzdGF0ZSBtYXJrZXRwbGFjZSwgZmFjaWxpdGF0
aW5nIGludGVyYWN0aW9ucyBiZXR3ZWVuIHByb3BlcnR5IG93bmVycyBhbmQg
cG90ZW50aWFsIGJ1eWVycyBvciByZW50ZXJzLgoKIyMgVGVjaG5vbG9naWVz
IFVzZWQKCi0gSmF2YQotIFNwcmluZyBCb290Ci0gU3ByaW5nIFdlYgotIE1h
dmVuCi0gSlBBL0hpYmVybmF0ZSAoZm9yIGRhdGFiYXNlIGludGVyYWN0aW9u
cykKLSBMb21ib2sgKGZvciByZWR1Y2luZyBib2lsZXJwbGF0ZSBjb2RlKQoK
IyMgQVBJIEVuZHBvaW50cwoKIyMjIEdldCBBbGwgTGlzdGluZ3MKLSAqKkVu
ZHBvaW50OioqIGBHRVQgL2FwaS92MS9saXN0aW5ncy9hbGxgCi0gKipEZXNj\nCg==\n`;

            // Remove newline characters and whitespace
            const cleanBase64 = base64String.replace(/\n/g, '').replace(/\s/g, '');

            // Decode the Base64 string
            const decodedText = atob(cleanBase64);
            setDecodedContent(decodedText);

            // Check if it's an image (basic detection)
            const imageTypes = ['data:image', '.png', '.jpg', '.jpeg', '.gif', '.bmp'];
            setIsImage(imageTypes.some(type => decodedText.includes(type)));

        } catch (error) {
            console.error('Decoding error:', error);
            setDecodedContent('Error decoding content');
        }
    }, []);

    // Render logic
    return (
        <div>
            {isImage ? (
                <img
                    src={decodedContent}
                    alt="Decoded Image"
                    style={{ maxWidth: '100%' }}
                />
            ) : (
                <pre>{decodedContent}</pre>
            )}
        </div>
    )}
export default Base64Converter
