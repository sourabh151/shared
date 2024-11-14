#!/bin/bash
NAME= cut -d '.' -f 1
g++-14 $1 -o $NAME.out
