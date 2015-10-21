Only reason this project exist, i forgot how _Super Pass Gen_ called,
failed at googling and decide to write my own, only halfway done someone told
me name _Super Gen Pass_ where i first heard of this kind of password "managing"

## Work in progress
not even functioning at this point, since discovering SPG i am not that motivated to use my own solution, atleas i know how it works better, and how to store iframe on github and show it other sites

## What it does?
Result of this bookmarklet should be exactly like
`echo -n PasswordDomain | sha256sum | base64 -w0 | cut -b 1-16`
detects current domain, runs *sha* and *base64* and copies result to clipboard
with minor benefit of adding custom prefix\appendix per domain to bypass failed minimum site requirements. Appendix will be stored in localStorage and it is not really secure, but 16 chars like **ODg2MTk1OGMwYjBm** should be secure enought on their own
