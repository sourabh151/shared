#include <iostream>

using namespace std;

struct Node
{
	int data;
	Node *left;
	Node *right;
};

Node* Insert(Node* root,int data)
{
	Node *node = new Node();
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

void Print(Node* root)
{
	if (root == NULL)
	{
		return;
	}
	Print(root->left);
	cout << root->data + " ";
}

int main()
{
	Node *root = NULL;
	root = Insert(root, 10);
	root = Insert(root, 20);
	root = Insert(root, 30);
	root = Insert(root, 40);
	root = Insert(root, 50);
	root = Insert(root, 60);
	// Print(root);
	cout << "hello world" << endl;

	return 0;
}
