function rm(list,val){
  let head = list,prev;
  while(list!=null){
    if(list.val === val){
      if(list === head){
        head = list.next;
      }
      else{
        prev.next = list.next;
      }
    }
    prev = list;
    list = list.next;
  }
}
