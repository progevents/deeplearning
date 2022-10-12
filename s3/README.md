the default permissions for S3 after bucket creation is to deny IP access
all requests are denied
have to set bucket policy for EXTERNAL access

the bucket policy isnt really correct because it allows access to the entire bucket.
you may need folder level permissions 
what is the difference? making more buckets. there is a limit on how many buckets you can make

https://aws.amazon.com/blogs/security/iam-policies-and-bucket-policies-and-acls-oh-my-controlling-access-to-s3-resources/
