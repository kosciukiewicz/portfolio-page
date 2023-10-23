#!/bin/bash

while getopts ":u:p:h:d:" opt; do
  case $opt in
    u) username="$OPTARG"
    ;;
    p) password="$OPTARG"
    ;;
    h) host="$OPTARG"
    ;;
    d) dir="$OPTARG"
    ;;
    \?) echo "Invalid option -$OPTARG" >&2
    exit 1
    ;;
  esac

  case $OPTARG in
    -*) echo "Option $opt needs a valid argument"
    exit 1
    ;;
  esac
done

# Delete existing directory
lftp -u $username,$password $host <<EOF
set ftp:ssl-allow no;
rm -r $dir
mkdir $dir
EOF

# Upload build directory via ftp
ncftpput -u $username -p $password  -R $host $dir ./build/*

