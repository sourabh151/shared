#include <iostream>
#include <stddef.h>
struct Node{
  int data;
  struct Node *next = NULL;
};
// typedef struct Node Node;
Node* Add(int data,Node *head){
  Node* node = new Node();
  if(node == NULL){
    return NULL;
  }
  node->data = data;
  node->next = NULL;
  if(!(head == NULL)){
    while(head->next != NULL){
      head = head ->next;
    }
    head->next = node;
  }
  return node;
}
void Print(Node* head){
  std::cout<<"printing Linked List!!!"<<std::endl;
  while(head != NULL){
    std::cout<<head->data<<std::endl;
    head = head->next;
  }
  std::cout<<"print complete!!!"<<std::endl;
}
void Delete(Node* head){
  Node *temp;
  std::cout<<"deleting all nodes!!!"<<std::endl;
  while(head != NULL){
    temp = head ->next;
    std::cout<<"deleting : " <<head->data<<std::endl;
    free(head);
    head = temp;
  }
  std::cout<<"deletion complete!!!"<<std::endl;
}
int main(){
  struct Node* head = Add(1,NULL);
  struct Node* two = Add(20,head);
  struct Node* three = Add(33,head);
  Print(head);
  Print(two);
  Delete(head);
  return 0;
}