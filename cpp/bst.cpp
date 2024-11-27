#include <iostream>

using namespace std;

struct Node
{
	int data;
	Node* left;
	Node* right;
};
struct ListNode{
  Node* current;
	ListNode* next;
};

Node* Insert(Node* root,int data){
	Node* node = new Node();
	node->data = data;
	node->left = node->right = NULL;
	cout << node->data << endl; 
	if (root == NULL)
	{
		return node;
	}
	else if (data <= root->data)
	{
		root->left = Insert(root->left, data);
	}
	else
	{
		root->right = Insert(root->right, data);
	}
	return root;
}

void Print(Node* root){
	ListNode* main = new ListNode();
	ListNode* cp = main;
	main->current = root;
	main->next = NULL;
	int h = Height(root);
	while(h>=0){
		while(cp!=NULL)
		{
			cp=cp->next;
		}
		--h;
	}
}
int Delete(Node* root,int data){
	if(root == NULL){
		return 0;
	}
	// if(root->data = )
<<<<<<< HEAD
=======
	return 0;
}

void height(Node* r,int c,int &max){
		if(r == NULL){
			return;
		}
		max = c>max?c:max;
		height(r->left,c+1,max);
		height(r->right,c+1,max);
	}

int Height(Node* root){
	int Max = 0;
	
	if (root == (NULL)){
   return -1;
  }
	else{
		height(root,0,Max);
	}
	return Max;
}
void Destroy(Node* root){
	if (root == NULL){
		return;
	}
	Destroy(root->left);
	Destroy(root->right);
	cout<<"deleting : "<<root->data<<endl;
	delete root;
	return;
>>>>>>> 249a7b4 (27/11 from mobile)
}

int main(){
	Node* root = NULL;
	root = Insert(root,3);
	root = Insert(root,5);
	root = Insert(root,7);
	root = Insert(root,9);
	root = Insert(root,2);
	root = Insert(root,6);
	root = Insert(root,55);


	// cout<<root->right->left->right->data<<endl;
	Print(root);
	cout<<"Height of bst is : "<<Height(root)<<endl;
	Destroy(root);
}

// if(root == NULL){
// 		return;
// 	}
// 	Print(root->left);
// 	cout<<root->data<<endl;
// 	Print(root->right);
	
