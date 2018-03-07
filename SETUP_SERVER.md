ls -l

chmod 600 giphy.pem

ssh -i giphy.pem ubuntu@ec2-54-161-101-246.compute-1.amazonaws.com

sudo apt-get update

sudo apt-get install libssl-dev g++ make

wget https://nodejs.org/dist/v8.9.4/node-v8.9.4.tar.gz

tar xvf node-v...

cd node-v8.9.4/

sudo apt-get install python

./configure && make && sudo make install



