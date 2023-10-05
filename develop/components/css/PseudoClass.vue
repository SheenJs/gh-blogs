<template>
  <div class="pseudo-class">
    <slot></slot>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less">
  .pseudo-class {
    input {
      height: 30px;
      width: 200px;
      border: 1px solid #eee;
      border-radius: 4px;
      padding: 0 10px;
      margin-top: 5px;
    }

    input[type='checkbox'] {
      width: 30px;
      height: 30px;
    }

    label {
      user-select: none;
    }

    a.link:link {
      background: red;
    }
    a.link:visited {
      background: yellow;
    }
    a.link:hover {
      background: blue;
    }
    a.link:active {
      background: green;
    }
    input.focus:focus {
      border-color: var(--vp-c-green);
    }
    input.checkbox:checked ~ span {
      width: 80px;
      background: red;
    }
    input.disabled-test:disabled {
      background: #f2f2f2;
    }
    input.disabled-test:enabled {
      background: #8ac4b1;
    }
    input.valid:valid {
      border-color: #b5f279;
    }
    input.invalid:invalid {
      border-color: #fc532f;
    }

    input.optional:required {
      border: 1px dotted red;
      background: floralwhite;
    }

    input.optional:optional {
      border: 1px dotted #10b981;
      background: white;
    }

    div.content {
      p,
      div {
        margin: 5px;
        width: 50px;
        display: inline-block;
        border: 1px solid #f2f2f2;
      }
    }

    div.content.child1 {
      & :first-child {
        background: red;
      }
      & :last-child {
        background: yellow;
      }
      & :nth-child(2n) {
        text-align: right;
      }
      & :nth-last-child(3) {
        background: #1dad9b;
      }
    }
    div.content.of-type {
      div:first-of-type {
        background: red;
      }
      div:last-of-type {
        background: red;
      }
      div:nth-of-type(2) {
        background: yellow;
      }
      div:nth-of-type(2n - 1) {
        text-align: right;
      }
    }
    div.content.only {
      p,
      div {
        min-height: 20px;
      }
      :only-child {
        background: red;
      }
      div:only-of-type {
        border-color: chartreuse;
      }
      p:only-of-type {
        border-color: #1d39c4;
      }
    }
    .not-has {
      & :not(:first-child) {
        background: red;
      }
      & :has(span) {
        color: white;
      }
    }

    .before-after {
      width: 100px;
      height: 50px;
      border: 1px solid #eee;
      &::before {
        content: '☆';
      }
      &::after {
        content: '★';
      }
    }

    .text-box {
      ::first-letter {
        font-size: 30px;
        color: red;
      }
      ::first-line {
        color: #999;
      }
      ::selection {
        background: gold;
      }
      p {
        margin: 0;
        display: list-item;
      }
      p::marker {
        color: blue;
        content: '★';
      }
    }
  }
</style>
