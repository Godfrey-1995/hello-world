
//读取文件
var fs = require('fs');
var data='';

var rs = fs.createReadStream('films.txt');

rs.setEncoding('utf8');

rs.on('data', function(chunk) {
    data += chunk;
 });

 rs.on('end',function(){
    console.log(data);

     //列表实现
   function fList(){
      this.pos = 0;
      this.listSize = 0;
      this.dataStore = [];
      this.append = append;
      this.insert = insert;
      this.remove = remove;
      this.find = find;
      this.next = next;
      this.prev = prev;
      this.front = front;
      this.end = end;
      this.clear = clear;
      this.lenght = length;
      this.getElement = getElement;
      this.currentPos = currentPos;
      this.conitions = conitions;
   }

   function append(element){
      this.dataStore[this.listSize++] = element;
      this.listSize++;
   }

   function insert(element){
      this.dataStore.splice(this.pos,0,element);
      this.listSize++;
   }

   function find(element){
      for(let i = 0; i <this.dataStore.lenght;++i){
         if(this.dataStore[i] == element){
            return i;
         }
      }
      return -1;
   }

   function remove(element){
      var index = this.find(element);
      if(index > -1){
         this.dataStore.splice(index,1);
         this.listSize--;
         return true;
      }else{
         return false;
      }
   }

   function next(){
      this.pos++;
   }

   function prev(){
      this.pos--;
   }

   function front(){
      this.pos = 0;
   }

   function end(){
      this.pos = this.listSize-1;
   }

   function clear(){
      delete this.dataStore;
      this.dataStore = [];
      this.pos = this.listSize = 0;
   }

   function length(){
      return this.listSize;
   }

   function getElement(){
      return this.dataStore[this.pos];
   }

   function currentPos(){
      return this.pos;
   }

   function conitions(element){
      for(let i = 0;i<this.dataStore.lenght;++i){
         if(this.dataStore[i] == element){
            return true;
         }
      }
      return false;
   }

   console.log('是否执行');

   var filmList = new fList();

   //将所有的电影添加到列表中
   for(let i = 0;i<data.length;++i){
      filmList.append(data[i]);
   }

   //使用迭代器迭代列表
   for(filmList.front();filmList.currentPos() < filmList.lenght();filmList.lenght()){
      console.log(filmList.getElement());
   }

 });

 rs.on('error', function(err){
    console.log(err.stack);
 });
 



