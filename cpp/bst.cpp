#include <iostream>

using namespace std;

struct Node{
	int data;
	Node* left;
	Node* right;
}

Node* Insert(root,data){
	Node* node = new Node(data);
	node->left = node->right = NULL;
	if(root == NULL){
		return node;
	}
	else if(data<=root->data){
		root->left = Insert(root->left,data);
	}
	else{
		root->right = Insert(root->right,data);
	}
	return root;
}

void Print(root){
	if(root == NULL){
		return;
	}
	Print(root->left);
	cout<<root->data + " ";
	
}

int main(){
	cout<<"hello world"<<endl;
}
