#!/usr/bin/env ruby

# brew install s3cmd
`s3cmd sync dist/ s3://twohandtouch.me/ -v --acl-public`
