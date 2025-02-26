'use strict';

class FileParser {
  constructor(inputElement) {
    this.inputElement = inputElement;
    this.file = null;

    this.inputElement.addEventListener(
      'change', this.handleFileChange.bind(this));
  }

  handleFileChange(event) {
    const files = event.target.files;

    if (files.length > 0) {
      this.file = files[0];
    }
  }

  async parseFile() {
    if (!this.file) {
      throw new Error('File is not found!');
    }

    return new Promise((resolve, reject) => {
      // eslint-disable-next-line no-undef
      const reader = new FileReader();

      reader.onload = (event) => {
        const content = event.target.result;
        const lines = content.split(/\r?\n|\s+/).filter(Boolean);

        resolve(lines);
      };
      reader.onerror = () => reject(new Error('Error of reading file'));
      reader.readAsText(this.file);
    });
  }
}

class PuzzleSolver {
  constructor(lines) {
    this.input = lines;
    this.adjList = new Map();
    this.memo = new Map();
    this.buildGraph();
  }

  buildGraph() {
    for (const num of this.input) {
      const suffix = num.slice(-2);

      if (!this.adjList.has(suffix)) {
        this.adjList.set(suffix, []);
      }
      this.adjList.get(suffix).push(num);
    }
  }

  findLongestPath() {
    let longestPath = '';

    for (const num of this.input) {
      const path = this.dfs(num, new Set());

      if (path.length > longestPath.length) {
        longestPath = path;
      }
    }

    return longestPath;
  }

  dfs(num, visited) {
    if (this.memo.has(num)) {
      return this.memo.get(num);
    }

    visited.add(num);

    const suffix = num.slice(-2);
    let bestPath = num;

    if (this.adjList.has(suffix)) {
      for (const nextNum of this.adjList.get(suffix)) {
        if (!visited.has(nextNum)) {
          const newPath = num + this.dfs(nextNum, new Set(visited)).slice(2);

          if (newPath.length > bestPath.length) {
            bestPath = newPath;
          }
        }
      }
    }

    this.memo.set(num, bestPath);

    return bestPath;
  }
}

const fileInput = document.querySelector('.form__input');
const parser = new FileParser(fileInput);
const form = document.querySelector('.form');

form.addEventListener('submit', async(e) => {
  e.preventDefault();

  try {
    const data = await parser.parseFile();
    const puzzle = new PuzzleSolver(data);
    const result = puzzle.findLongestPath();

    outputResult(result);
  } catch (error) {
    displayError(error.message);
  }
});

function displayError(message) {
  const errorField = document.querySelector('.program-result__error');

  errorField.textContent = message;
  document.body.append(errorField);
}

function outputResult(result) {
  const outputField = document.querySelector('.program-result__output');

  outputField.textContent = result;

  return result;
}
