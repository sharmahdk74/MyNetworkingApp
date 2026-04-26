/**
 * @format
 */

import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import App from '../App';

jest.useFakeTimers();

function extractText(
  node:
    | ReactTestRenderer.ReactTestRendererNode
    | ReactTestRenderer.ReactTestRendererNode[]
    | string
    | null,
): string[] {
  if (node === null) {
    return [];
  }

  if (typeof node === 'string') {
    return [node];
  }

  if (Array.isArray(node)) {
    return node.flatMap(extractText);
  }

  return extractText(node.children);
}

test('renders networking feed content', async () => {
  let renderer: ReactTestRenderer.ReactTestRenderer;

  await ReactTestRenderer.act(() => {
    renderer = ReactTestRenderer.create(<App />);
  });

  await ReactTestRenderer.act(() => {
    jest.advanceTimersByTime(300);
  });

  const renderedText = extractText(renderer!.toJSON()).join(' ');

  expect(renderedText).toContain('Aarav Mehta');
  expect(renderedText).toContain('AI Product Lead at Nova Systems');
  expect(renderedText).toContain('Connect');
});
