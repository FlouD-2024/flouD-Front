REPOSITORY=/home/ubuntu/deploy

cd $REPOSITORY 

sudo npm install

sudo npm install next@13

sudo pm2 reload all