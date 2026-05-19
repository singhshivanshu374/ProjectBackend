1) open oracle virtual box -> create 2 VM (VM1 & VM2) -> select OS as Linux -> OSdistribution as Ubuntu -> then specify virtual hardware as 1024 mb base memory ->  then specify virtual hard disk as tick use an existing virtual hard disk file also add the green / blue ubuntu downloaded file -> finish
similarly create one more VM
2)  from the sidebar open Network -> NAT network -> create -> ip config same or change -> apply
3)  VM 1 settings -> network -> NAT network and select that created nat network -> then apply
4)  do this for both vm
5)  start VM1
6)  vagrant is the name and password
7)  sudo apt install net-tools in VM1
8)  sudo apt update in VM1
9)  ifconfig for ip checking
10)  touch transfer.txt -> nano transfer.txt on same VM1 -> ctrl X -> Y -> enter
11)  start VM2
12)  sudo apt install net-tools in VM2
13) sudo apt update in VM2
14) ifconfig se check IP
15) goto VM1 scp transfer.txt vagrant@<ipofVM2>:/home/vagrant -> enter -> yes -> password : vagrant
16) then open vm2 check ls and file will be there
