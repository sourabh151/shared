#include <iostream>

using namespace std;

struct Node{
	int data;
	Node* left;
	Node* right;
};

Node* Insert(Node* root,int data){
	Node* node = new Node();
	node->data = data;
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

void Print(Node* root){
	if(root == NULL){
		return;
	}
	Print(root->left);
	cout<<root->data<<endl;
	Print(root->right);
	
}
int Delete(Node* root,data){
	if(root == NULL){
		return 0;
	}
	if(root->data = )
}

int main(){
	Node* root = NULL;
	root = Insert(root,6);
	root = Insert(root,10);
	root = Insert(root,5);
	root = Insert(root,7);
	// cout<<root->right->left->right->data<<endl;
	Print(root);
}
