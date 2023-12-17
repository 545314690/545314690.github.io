#  舆情系统部署手册

## 基础环境

### 查看操作系统：

1、cat /etc/[redhat](https://so.csdn.net/so/search?q=redhat&spm=1001.2101.3001.7020)-release
适用于：CentOS，RedHat
CentOS Linux release 7.8.2003 (Core)



如图，出现CentOS ，则为CentOS系统

2.cat /etc/issue
显示如下图，则为CentOS;
如果出现Ubuntu字样，则是Ubuntu



```sudo scp -P  50000 jdk1.8.0_111.tar.gz hik@123.163.24.141:/home/hik/soft/ ```



修改主机名和免密登陆

10.10.0.11   web

10.10.0.12   spider

>[https://www.jianshu.com/p/1a80328ea0a5](https://www.jianshu.com/p/1a80328ea0a5)

>[https://blog.csdn.net/qq_35023116/article/details/89603442?spm=1001.2101.3001.6661.1&utm_medium=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1-89603442-blog-108377991.pc_relevant_multi_platform_whitelistv4&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1-89603442-blog-108377991.pc_relevant_multi_platform_whitelistv4&utm_relevant_index=1](https://blog.csdn.net/qq_35023116/article/details/89603442?spm=1001.2101.3001.6661.1&utm_medium=distribute.pc_relevant_t0.none-task-blog-2~default~CTRLIST~Rate-1-89603442-blog-108377991.pc_relevant_multi_platform_whitelistv4&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-2~default~CTRLIST~Rate-1-89603442-blog-108377991.pc_relevant_multi_platform_whitelistv4&utm_relevant_index=1)



做了[yum](https://so.csdn.net/so/search?q=yum&spm=1001.2101.3001.7020) install的时候提示：Loaded plugins: fastestmirror

禁用插件的修改

##  Docker 安装

Centos 系统配置修改：

```bash
sudo wget -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo

sudo yum clean all

 sudo yum makecache

sudo yum update
# Docker 安装
curl https://releases.rancher.com/install-docker/17.03.sh | sh

service docker stop

sudo usermod -aG docker hik

#设置docker服务开机启动
[root@Ieat4 ~]# systemctl enable docker.service

sudo mv /var/lib/docker  /home/jielin/data

 

ln -s /home/jielin/data/docker /var/lib/docker


 ls -la /var/lib/docker

sudo service docker start
```







## Rancher  安装

### 1、rancher服务安装

```bash
sudo docker run --name rancher-server -d --restart=unless-stopped -p 18080:8080 rancher/server

 

docker run -d -p 18080:8080 --restart=unless-stopped --name rancher-server -e JAVA_OPTS="-Xmx4096m" rancher/server:stable

```



### 2、rancher client 安装

添加rancher client：

\##本机 5.112
sudo docker run -e CATTLE_AGENT_IP="192.168.1.112"  --rm --privileged -v /var/run/docker.sock:/var/run/docker.sock -v /var/lib/rancher:/var/lib/rancher rancher/agent:v1.2.11 http://192.168.1.112:18080/v1/scripts/DFBC2F3C3C3D1B871D70:1672444800000:LC71TLwSPhYzwyzK7KJ2Es7AqfE



\##clent 5.113

sudo docker run -e CATTLE_AGENT_IP="192.158.6.113"  --rm --privileged -v /var/run/docker.sock:/var/run/docker.sock -v /var/lib/rancher:/var/lib/rancher rancher/agent:v1.2.11 http://123.163.24.141:18080/v1/scripts/DFBC2F3C3C3D1B871D70:1672444800000:LC71TLwSPhYzwyzK7KJ2Es7AqfE





sudo docker run -e CATTLE_AGENT_IP="192.168.1.113"  --rm --privileged -v /var/run/docker.sock:/var/run/docker.sock -v /var/lib/rancher:/var/lib/rancher rancher/agent:v1.2.11 http://192.168.1.112:18080/v1/scripts/DFBC2F3C3C3D1B871D70:1672444800000:LC71TLwSPhYzwyzK7KJ2Es7AqfE





## JDK



sudo vim /etc/profile



export JAVA_HOME=/home/hik/soft/jdk1.8.0_111/

export JRE_HOME=${JAVA_HOME}/jre

export CLASSPATH=.:${JAVA_HOME}/lib:${JRE_HOME}/lib

export PATH=${JAVA_HOME}/bin:$PATH



\##export MVN_HOME=/opt/soft/apache-maven-3.5.3/

\##export PATH=${MVN_HOME}/bin:$PATH





\#JDK

export JAVA_HOME=/home/hik/soft/jdk1.8.0_111/

export JRE_HOME=${JAVA_HOME}/jre

export CLASSPATH=.:${JAVA_HOME}/lib:${JRE_HOME}/lib

export PATH=${JAVA_HOME}/bin:$PATH



\## export MVN_HOME=/opt/soft/apache-maven-3.5.3/

\## export PATH=${MVN_HOME}/bin:$PATH



上传文件
scp -p 50000 /Users/shaolei/Documents/jdk1.8.0_111.tar.gz [hik](mailto:jielin@123.160.218.14:/home/jielin/soft)

@123.160.218.14:/home/hik/soft

scp -p 55555 jdk1.8.0_111.tar.gz hik@192.168.5.113:/home/hik/soft/





## mysql安装

```bash
sudo docker run --name mysql --restart=always -p 20138:3306 -v mysql_data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=jielin123 -d mysql:5.7.19 --character-set-server=utf8mb4 --collation-server=utf8mb4_unicode_ci --lower_case_table_names=1

 


```



### 创建数据库

```bash
mysql -u root -p -h 192.168.1.113 

create database yuqing default character set utf8mb4 collate utf8mb4_unicode_ci;

create database newspider default character set utf8mb4 collate utf8mb4_unicode_ci;

 
```



### 加权限

```bash
GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY 'jielin123' WITH GRANT OPTION;

flush privileges;

如果远程连不上,执行下面命令后重启MySQL：

cd /etc/mysql/conf.d

 echo 'bind-address=0.0.0.0' >> mysql.cnf
```







## Redis



```bash
sudo docker run -p 18082:6379 -v redis-data:/data --name redis --restart=always -d redis:4.0.2 --requirepass jielin123

 

sudo docker run -p 18082:6379 -v redis-data:/data --name redis --restart=always -d redis:4.0.2 --appendonly yes --requirepass jielin123
```







## MongoDB



```bash
sudo docker run -p 20179:27017 --name mongo-auth --restart=always -v /home/hik/data/docker/volumes/mongodb-data/_data:/data/db -d mongo:3.4.9 --auth

 

\####注意/data/docker/volumes/mongodb-data/_data 要为空目录

 

sudo docker run -p 20179:27017 --name mongo-auth --restart=always -v /data/docker/volumes/mongodb-data/_data:/data/db -d mongo:3.4.9 --auth

\#### 注意/data/docker/volumes/mongodb-data/_data 要为空目录

docker exec -it mongo-auth mongo admin
```









## 建账号配权限

```bash
use admin

db.createUser({ user: 'root', pwd: 'root', roles: [ { role: "userAdminAnyDatabase", db: "admin" } ] })

 

db.auth("root","root")

db.createUser({ user: 'jielin', pwd: 'jielin123', roles: [ { role: "userAdminAnyDatabase", db: "admin" } ] })

 

db.createUser({user:"xxxx",pwd:"xxxx",roles:[{role:"dbOwner",db:"yourdb"}]})

 

db.createUser({user:"jielin",pwd:"jielin123",roles:[{role:"dbOwner",db:"yuqing"}]})

 

db.createUser({user:"xxxx",pwd:"xxxx",roles:[{role:"dbOwner",db:"yourdb"}]})

 

db.createUser({user:"jielin",pwd:"jielin123",roles:[{role:"dbOwner",db:"jielin"}]}) 

 

db.createUser({user:"root",pwd:"root",roles:[{role:"dbOwner",db:"jielin"}]}) 

 


db.createUser({user:"admin", pwd: "admin123", roles: ["root"]})

db.createUser({user:"root", pwd: "root", roles: ["root"]})

db.createUser({user:"jielin", pwd: "jielin123", roles: ["root"]})

//root为管理员权限

测试:

mongo  宿主机ip/admin  -utest -p

查看连接是否成功 

 

 

***\*## jielin##\****

db.createUser({ user: 'root', pwd: 'root', roles: [ { role: "userAdminAnyDatabase", db: "jielin" } ] })

 

db.createUser({ user: 'jielin', pwd: 'jielin123', roles: [ { role: "userAdminAnyDatabase", db: "jielin" } ] })

 

db.createUser({user:"jielin",pwd:"jielin123",roles:[{role:"dbOwner",db:"yuqing"}]})

 

db.auth("root","root");

db.auth("jielin","jielin123");
```







## zookeeper



```bash
docker run -d --name zookeeper01 --publish 2181:2181 -p 2888:2888 -p 3888:3888 \

--volume /etc/localtime:/etc/localtime \

--restart=always \

--net=host \

--volume zookeeper:/opt/zookeeper-3.4.6 \

--volume zookeeper_conf:/opt/zookeeper-3.4.6/conf \

--volume zookeeper_data:/opt/zookeeper-3.4.6/data \

--volume zookeeper_logs:/opt/zookeeper-3.4.6/logs \

--volume /etc/localtime:/etc/localtime \

-h zookeeper01 \

wurstmeister/zookeeper:3.4.6

 

 

vim /home/jielin/data/docker/volumes/zookeeper_conf/_data/zoo.cfg 

server.1=10.54.1.222:2888:3888

server.2=10.54.1.223:2888:3888

 

vim /var/lib/docker/volumes/zookeeper_data/_data/myid


```





## Kafka



```bash
docker run -d --name kafka01 --publish 9092:9092 \
--env KAFKA_BROKER_ID=222 \
--env HOST_IP=192.168.1.113 \
--env KAFKA_ZOOKEEPER_CONNECT=192.168.1.113:2181 \
--env KAFKA_ADVERTISED_HOST_NAME=192.168.1.113 \
--env KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://192.168.1.113:9092 \
--env KAFKA_LISTENERS=PLAINTEXT://0.0.0.0:9092 \
--env KAFKA_ADVERTISED_PORT=9092 \
--env JMX_PORT=9999 \
--volume kafka:/opt/kafka \
--restart=always \
-h kafka01 \
--volume /etc/localtime:/etc/localtime \
wurstmeister/kafka:2.11-2.0.0
```





## kafkamanager



```bash
docker run -d --name kafka-manager \

-p 9001:9000 \

--restart=always \

--env ZK_HOSTS=192.168.1.113:2181 \

sheepkiller/kafka-manager
```













## phantomjs



```bash
docker run -d --restart=always --name phantomjs -p 29400:8910 wernight/phantomjs phantomjs --webdriver=8910

```



##  安装 fastdfs

git clone https://github.com/545314690/fastdfs-nginx.git



FastDFS

只需在能联网的服务器修改配置文件，把镜像上传到非联网服务器即可

上传完成后安装 步骤参考https://www.jianshu.com/p/c66af05c65f3

192.168.1.112



/home/hik/data/fdfs



## 需要的文件复制过来

```bash
cd /home/hik

scp -r -P 55556  hik@222.88.148.80:/home/hik/kafkaConsumer .  
scp -r -P 55556  hik@222.88.148.80:/home/hik/webservice-yuqing . 
scp -r -P 55556 hik@222.88.148.80:/home/hik/nbspider-3.0 .  

scp -r -P 55556  hik@222.88.148.80:/home/hik/code . 

scp -r -P 55556  hik@222.88.148.80:/home/hik/apache-maven-3.8.6 .

scp -r -P 55556  hik@222.88.148.80:/home/hik/.m2/repository /home/hik/.m2/repository
```



## 配置maven环境变量

```bash
vim ~/.bashrc

export PATH=$PATH:/home/hik/apache-maven-3.8.6/bin/


# 然后
source ~/.bashrc
mvn -v
```



## ES

### 复制并启动

```bash
mkdir elastic

scp -r -P 55556 hik@222.88.148.80:/home/hik/elasticsearch-2.3.5 /home/hik/elastic/

cd elastic/elasticsearch-2.3.5/
bin/elasticsearch -d
```



### 建索引

```bash
 curl 'http://123.163.24.141:29300/yuqing/' \
  -X 'PUT' \
  -H 'Accept: application/json, text/javascript, */*; q=0.01' \
  -H 'Accept-Language: zh-CN,zh;q=0.9' \
  -H 'Connection: keep-alive' \
  -H 'Content-Type: application/json' \
  -H 'Cookie: PL=rancher; CSRF=F77DA2B67F; token=J4wkL1tC1XNVisqgj2Bg11t4wuSbwvPv1ah4Bie2' \
  -H 'Origin: chrome-extension://cpmmilfkofbeimbmgiclohpodggeheim' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36' \
  --data-raw '{"mappings":{"article":{"_parent":{"type":"user"},"properties":{"parent":{"type":"string"},"wbNum":{"type":"integer"},"contactInfo":{"index":"not_analyzed","type":"string"},"industryCategory":{"index":"not_analyzed","type":"string"},"commentUrl":{"index":"not_analyzed","type":"string"},"pubTime":{"format":"strict_date_optional_time||epoch_millis","type":"date"},"channel":{"index":"not_analyzed","type":"string"},"youqingUrl":{"index":"not_analyzed","type":"string"},"source":{"index":"not_analyzed","type":"string"},"weiboVideo":{"index":"not_analyzed","type":"string"},"type":{"type":"string"},"likeNum":{"type":"long"},"floorId":{"index":"not_analyzed","type":"string"},"dev":{"index":"not_analyzed","type":"string"},"oDocId":{"index":"not_analyzed","type":"string"},"id":{"type":"string"},"userUrl":{"index":"not_analyzed","type":"string"},"fansNum":{"type":"integer"},"level":{"type":"integer"},"registerTime":{"index":"not_analyzed","type":"string"},"author":{"index":"not_analyzed","type":"string"},"foward":{"type":"long"},"detailsDomain":{"properties":{"alternateField5":{"index":"not_analyzed","type":"string"},"personName":{"index":"not_analyzed","type":"string"},"alternateField4":{"index":"not_analyzed","type":"string"},"alternateField6":{"index":"not_analyzed","type":"string"},"alternateField1":{"index":"not_analyzed","type":"string"},"alternateField3":{"index":"not_analyzed","type":"string"},"alternateField2":{"index":"not_analyzed","type":"string"},"organization":{"index":"not_analyzed","type":"string"},"addressName":{"index":"not_analyzed","type":"string"}}},"tags":{"index":"not_analyzed","type":"string"},"verifyInfo":{"index":"not_analyzed","type":"string"},"commentNum":{"type":"long"},"titleSimHash":{"index":"not_analyzed","type":"string"},"newsId":{"index":"not_analyzed","type":"string"},"oUId":{"index":"not_analyzed","type":"string"},"textSimHash":{"index":"not_analyzed","type":"string"},"forwardNum":{"type":"long"},"gatherTime":{"format":"strict_date_optional_time||epoch_millis","type":"date"},"snapshot":{"index":"not_analyzed","type":"string"},"verifyType":{"type":"integer"},"oAuthor":{"index":"not_analyzed","type":"string"},"birthday":{"index":"not_analyzed","type":"string"},"contentImages":{"type":"string"},"description":{"index":"not_analyzed","type":"string"},"title":{"type":"string","fields":{"raw":{"norms":{"enabled":true},"index":"not_analyzed","boost":5,"type":"string"},"cn":{"analyzer":"ik","type":"string"}}},"content":{"type":"string","fields":{"cn":{"analyzer":"ik","type":"string"}}},"floorNum":{"type":"long"},"workInfo":{"index":"not_analyzed","type":"string"},"dateCreated":{"type":"long"},"clickNum":{"type":"long"},"summary":{"type":"string"},"photo":{"index":"not_analyzed","type":"string"},"dateModified":{"type":"long"},"genders":{"index":"not_analyzed","type":"string"},"originalUrl":{"index":"not_analyzed","type":"string"},"url":{"index":"not_analyzed","type":"string"},"uId":{"index":"not_analyzed","type":"string"},"site":{"index":"not_analyzed","type":"string"},"deleted":{"type":"boolean"},"nlp":{"properties":{"summary":{"index":"not_analyzed","type":"string"},"sentiment":{"properties":{"label":{"index":"not_analyzed","type":"string"},"value":{"type":"double"}}},"keywords":{"index":"not_analyzed","type":"string"},"channel":{"index":"not_analyzed","type":"string"},"fingerprint":{"index":"not_analyzed","type":"string"},"topic":{"index":"not_analyzed","type":"string"},"nameEntity":{"properties":{"org":{"index":"not_analyzed","type":"string"},"place":{"index":"not_analyzed","type":"string"},"newWords":{"index":"not_analyzed","type":"string"},"people":{"index":"not_analyzed","type":"string"}}}}},"educationInfo":{"index":"not_analyzed","type":"string"},"weiboId":{"index":"not_analyzed","type":"string"},"location":{"index":"not_analyzed","type":"string"},"category":{"index":"not_analyzed","type":"string"},"followsNum":{"type":"integer"}}},"user":{"properties":{"birthday":{"index":"not_analyzed","type":"string"},"wbNum":{"type":"integer"},"fansNum":{"type":"integer"},"contactInfo":{"index":"not_analyzed","type":"string"},"gender":{"index":"not_analyzed","type":"string"},"level":{"type":"integer"},"registerTime":{"index":"not_analyzed","type":"string"},"description":{"index":"not_analyzed","type":"string"},"photo":{"index":"not_analyzed","type":"string"},"dateModified":{"type":"long"},"type":{"type":"string"},"userId":{"index":"not_analyzed","type":"string"},"tags":{"index":"not_analyzed","type":"string"},"verifyInfo":{"index":"not_analyzed","type":"string"},"uid":{"index":"not_analyzed","type":"string"},"workInfo":{"index":"not_analyzed","type":"string"},"dateCreated":{"type":"long"},"deleted":{"type":"boolean"},"educationInfo":{"index":"not_analyzed","type":"string"},"name":{"index":"not_analyzed","type":"string"},"location":{"index":"not_analyzed","type":"string"},"id":{"type":"string"},"verifyType":{"type":"integer"},"followsNum":{"type":"integer"}}},"collect":{"_routing":{"required":true},"_parent":{"type":"article"},"properties":{"parent":{"type":"string"},"dateCreated":{"type":"long"},"deleted":{"type":"boolean"},"esBaseDomain":{"properties":{"contentImages":{"type":"string"},"pubTime":{"format":"strict_date_optional_time||epoch_millis","type":"date"},"channel":{"index":"not_analyzed","type":"string"},"source":{"index":"not_analyzed","type":"string"},"title":{"type":"string"},"type":{"type":"string"},"content":{"type":"string"},"dateCreated":{"type":"long"},"dev":{"index":"not_analyzed","type":"string"},"oDocId":{"index":"not_analyzed","type":"string"},"id":{"type":"string"},"userUrl":{"index":"not_analyzed","type":"string"},"summary":{"type":"string"},"author":{"index":"not_analyzed","type":"string"},"dateModified":{"type":"long"},"url":{"index":"not_analyzed","type":"string"},"commentNum":{"type":"long"},"titleSimHash":{"index":"not_analyzed","type":"string"},"uId":{"index":"not_analyzed","type":"string"},"site":{"index":"not_analyzed","type":"string"},"deleted":{"type":"boolean"},"nlp":{"properties":{"summary":{"type":"string"},"sentiment":{"properties":{"label":{"type":"string"},"value":{"type":"double"}}},"keywords":{"type":"string"},"fingerprint":{"type":"string"},"nameEntity":{"properties":{"org":{"type":"string"},"place":{"type":"string"},"people":{"type":"string"}}}}},"textSimHash":{"index":"not_analyzed","type":"string"},"gatherTime":{"format":"strict_date_optional_time||epoch_millis","type":"date"},"category":{"index":"not_analyzed","type":"string"},"snapshot":{"index":"not_analyzed","type":"string"}}},"dateModified":{"type":"long"},"id":{"type":"string"},"userId":{"index":"not_analyzed","type":"string"}}},"comment":{"_routing":{"required":true},"_parent":{"type":"article"},"properties":{"parent":{"type":"string"},"contactInfo":{"index":"not_analyzed","type":"string"},"industryCategory":{"index":"not_analyzed","type":"string"},"pubTime":{"format":"strict_date_optional_time||epoch_millis","type":"date"},"channel":{"index":"not_analyzed","type":"string"},"youqingUrl":{"index":"not_analyzed","type":"string"},"source":{"index":"not_analyzed","type":"string"},"type":{"type":"string"},"likeNum":{"type":"long"},"dev":{"index":"not_analyzed","type":"string"},"oDocId":{"index":"not_analyzed","type":"string"},"id":{"type":"string"},"userUrl":{"index":"not_analyzed","type":"string"},"area":{"index":"not_analyzed","type":"string"},"fansNum":{"type":"integer"},"targetId":{"index":"not_analyzed","type":"string"},"level":{"type":"integer"},"registerTime":{"index":"not_analyzed","type":"string"},"author":{"index":"not_analyzed","type":"string"},"tags":{"index":"not_analyzed","type":"string"},"verifyInfo":{"index":"not_analyzed","type":"string"},"commentNum":{"type":"long"},"titleSimHash":{"index":"not_analyzed","type":"string"},"textSimHash":{"index":"not_analyzed","type":"string"},"commentVideo":{"index":"not_analyzed","type":"string"},"commentId":{"index":"not_analyzed","type":"string"},"gatherTime":{"format":"strict_date_optional_time||epoch_millis","type":"date"},"snapshot":{"index":"not_analyzed","type":"string"},"verifyType":{"type":"integer"},"birthday":{"index":"not_analyzed","type":"string"},"gender":{"index":"not_analyzed","type":"string"},"description":{"index":"not_analyzed","type":"string"},"title":{"type":"string"},"content":{"type":"string","fields":{"raw":{"index":"not_analyzed","type":"string"},"cn":{"analyzer":"ik","type":"string"}}},"workInfo":{"index":"not_analyzed","type":"string"},"dateCreated":{"type":"long"},"commentType":{"type":"long"},"replyNum":{"type":"long"},"summary":{"type":"string"},"articlePubTime":{"format":"strict_date_optional_time||epoch_millis","type":"date"},"photo":{"index":"not_analyzed","type":"string"},"dateModified":{"type":"long"},"genders":{"index":"not_analyzed","type":"string"},"url":{"index":"not_analyzed","type":"string"},"uId":{"index":"not_analyzed","type":"string"},"site":{"index":"not_analyzed","type":"string"},"deleted":{"type":"boolean"},"nlp":{"properties":{"summary":{"index":"not_analyzed","type":"string"},"sentiment":{"properties":{"label":{"index":"not_analyzed","type":"string"},"value":{"type":"double"}}},"keywords":{"index":"not_analyzed","type":"string"},"channel":{"index":"not_analyzed","type":"string"},"fingerprint":{"index":"not_analyzed","type":"string"},"topic":{"index":"not_analyzed","type":"string"},"nameEntity":{"properties":{"org":{"index":"not_analyzed","type":"string"},"place":{"index":"not_analyzed","type":"string"},"newWords":{"index":"not_analyzed","type":"string"},"people":{"index":"not_analyzed","type":"string"}}}}},"educationInfo":{"index":"not_analyzed","type":"string"},"location":{"index":"not_analyzed","type":"string"},"category":{"index":"not_analyzed","type":"string"},"followsNum":{"type":"integer"}}}}}' \
  --compressed \
  --insecure
```

### 建模板

```bash
curl 'http://123.163.24.141:29300/_template/yuqing_month_template/' \
  -X 'PUT' \
  -H 'Accept: application/json, text/javascript, */*; q=0.01' \
  -H 'Accept-Language: zh-CN,zh;q=0.9' \
  -H 'Connection: keep-alive' \
  -H 'Content-Type: application/json' \
  -H 'Cookie: PL=rancher; CSRF=F77DA2B67F; token=J4wkL1tC1XNVisqgj2Bg11t4wuSbwvPv1ah4Bie2' \
  -H 'Origin: chrome-extension://cpmmilfkofbeimbmgiclohpodggeheim' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36' \
  --data-raw '{"order":0,"template":"yuqing_20*","settings":{"index":{"number_of_shards":"3"}},"mappings":{"article":{"properties":{"parent":{"type":"string"},"wbNum":{"type":"integer"},"contactInfo":{"index":"not_analyzed","type":"string"},"industryCategory":{"index":"not_analyzed","type":"string"},"commentUrl":{"index":"not_analyzed","type":"string"},"pubTime":{"format":"strict_date_optional_time||epoch_millis","type":"date"},"channel":{"index":"not_analyzed","type":"string"},"youqingUrl":{"index":"not_analyzed","type":"string"},"source":{"index":"not_analyzed","type":"string"},"weiboVideo":{"index":"not_analyzed","type":"string"},"type":{"type":"string"},"likeNum":{"type":"long"},"floorId":{"index":"not_analyzed","type":"string"},"dev":{"index":"not_analyzed","type":"string"},"oDocId":{"index":"not_analyzed","type":"string"},"id":{"type":"string"},"userUrl":{"index":"not_analyzed","type":"string"},"fansNum":{"type":"integer"},"registerTime":{"index":"not_analyzed","type":"string"},"level":{"type":"integer"},"author":{"index":"not_analyzed","type":"string"},"foward":{"type":"long"},"detailsDomain":{"properties":{"personName":{"index":"not_analyzed","type":"string"},"alternateField5":{"index":"not_analyzed","type":"string"},"alternateField4":{"index":"not_analyzed","type":"string"},"alternateField6":{"index":"not_analyzed","type":"string"},"alternateField1":{"index":"not_analyzed","type":"string"},"alternateField3":{"index":"not_analyzed","type":"string"},"organization":{"index":"not_analyzed","type":"string"},"alternateField2":{"index":"not_analyzed","type":"string"},"addressName":{"index":"not_analyzed","type":"string"}}},"verifyInfo":{"index":"not_analyzed","type":"string"},"tags":{"index":"not_analyzed","type":"string"},"commentNum":{"type":"long"},"titleSimHash":{"index":"not_analyzed","type":"string"},"newsId":{"index":"not_analyzed","type":"string"},"oUId":{"index":"not_analyzed","type":"string"},"textSimHash":{"index":"not_analyzed","type":"string"},"forwardNum":{"type":"long"},"gatherTime":{"format":"strict_date_optional_time||epoch_millis","type":"date"},"verifyType":{"type":"integer"},"snapshot":{"index":"not_analyzed","type":"string"},"oAuthor":{"index":"not_analyzed","type":"string"},"contentImages":{"type":"string"},"birthday":{"index":"not_analyzed","type":"string"},"description":{"index":"not_analyzed","type":"string"},"title":{"type":"string","fields":{"raw":{"norms":{"enabled":true},"index":"not_analyzed","boost":5,"type":"string"},"cn":{"analyzer":"ik","type":"string"}}},"content":{"type":"string","fields":{"cn":{"analyzer":"ik","type":"string"}}},"floorNum":{"type":"long"},"workInfo":{"index":"not_analyzed","type":"string"},"dateCreated":{"type":"long"},"clickNum":{"type":"long"},"summary":{"type":"string"},"photo":{"index":"not_analyzed","type":"string"},"dateModified":{"type":"long"},"genders":{"index":"not_analyzed","type":"string"},"originalUrl":{"index":"not_analyzed","type":"string"},"url":{"index":"not_analyzed","type":"string"},"uId":{"index":"not_analyzed","type":"string"},"site":{"index":"not_analyzed","type":"string"},"deleted":{"type":"boolean"},"nlp":{"properties":{"summary":{"index":"not_analyzed","type":"string"},"sentiment":{"properties":{"label":{"index":"not_analyzed","type":"string"},"value":{"type":"double"}}},"keywords":{"index":"not_analyzed","type":"string"},"channel":{"index":"not_analyzed","type":"string"},"fingerprint":{"index":"not_analyzed","type":"string"},"topic":{"index":"not_analyzed","type":"string"},"nameEntity":{"properties":{"org":{"index":"not_analyzed","type":"string"},"place":{"index":"not_analyzed","type":"string"},"newWords":{"index":"not_analyzed","type":"string"},"people":{"index":"not_analyzed","type":"string"}}}}},"educationInfo":{"index":"not_analyzed","type":"string"},"weiboId":{"index":"not_analyzed","type":"string"},"location":{"index":"not_analyzed","type":"string"},"category":{"index":"not_analyzed","type":"string"},"followsNum":{"type":"integer"}}}},"aliases":{"yuqing_month":{}}}' \
  --compressed \
  --insecure
  
```



## 后端服务



>  先建es索引和模板,es里不要yuqing-month这个索引，它是当别名来用的，启动爬虫，再启动webservice-yuqing



### nb-spider

```bash
mvn package -Dmaven.test.skip=true

docker build -t nb-spider .

docker run -d --restart=always --name nb-spider -p 20170:20170 nb-spider
http://123.163.24.141:20136/nb-spider/swagger-ui.html
```



### kafkaconsumer

```bash
mvn package -Dmaven.test.skip=true
docker build -t kafkaconsumer .

docker run -d --restart=always --name kafkaconsumer kafkaconsumer 

 
```



### webservice-yuqing

```bash
mvn package -Dmaven.test.skip=true
docker build -t webservice-yuqing .

docker run -d --restart=always --name webservice-yuqing -p 29200:8888 webservice-yuqing

http://123.163.24.141:20136/yuqing/swagger-ui.html
```





##  前端服务

### yuqing



docker run -d --restart=always --name yuqing -p 20136:80 yuqing:v1.0.0

 

 

 

 



 