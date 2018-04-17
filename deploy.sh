#!/bin/bash

npm run build && aws s3 sync build/ s3://petreski-react-countries

// https://aws.amazon.com/cloudfront/pricing
aws cloudfront create-invalidation --distribution-id=E2F18KNA2IIS8J --paths /