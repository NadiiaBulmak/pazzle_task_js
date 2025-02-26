# Largest One-Dimensional Digital Puzzle

- [DEMO LINK](https://nadiiabulmak.github.io/pazzle_task_js/)

This project solves the task of constructing the largest (longest) sequence from a set of digital fragments, where the connection between them is made by matching the first or last two digits of each fragment.

## 🧩 Problem Description:
We are given a set of numeric strings, and each fragment can connect to another fragment if the first two digits of the second fragment match the last two digits of the first fragment. The goal is to assemble the largest possible sequence using all fragments exactly once.

** 📌 Example:**<br>
<br>
Suppose we have the following fragments:<br>
608017, 248460, 962282, 994725, 177092<br><br>
By analyzing the last two digits, we can create the following chain:<br>
248460 → 608017 → 177092<br><br>
Which results in the final sequence:<br>
24846080177092<br>

## ✨ Features:<br>
✅ The program accepts a file with numeric fragments (each consisting only of digits).<br>
✅ Automatically processes the data and builds the longest possible sequence.<br>
✅ Uses graph-based depth-first search (DFS) to find the optimal solution.<br>
✅ Prevents duplicate usage of any fragment to ensure uniqueness.<br>

## 🛠️ Technologies:
- JavaScript (core logic and algorithms)<br>
- HTML (for file upload form)<br>
- CSS (for styling and UI)<br>

## 🚀 How It Works:<br>
1️⃣ Upload a .txt file containing numeric fragments.<br>
2️⃣ The program analyzes the fragments and builds the longest sequence possible.<br>
3️⃣ The result is displayed on the screen.<br>

📌 Try it out! Upload a file and see how the program constructs the longest digital puzzle.

