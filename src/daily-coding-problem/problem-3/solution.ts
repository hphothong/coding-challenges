// Start: 17:14:00 MST

export class Node {
  public val: string;

  public left?: Node;

  public right?: Node;

  constructor(val: string, left?: Node, right?: Node) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

export function serialize(root?: Node): string {
  if (root === undefined) {
    return '|';
  }

  const leftSubtree = serialize(root.left);
  const rightSubtree = serialize(root.right);

  return `${root.val},${leftSubtree},${rightSubtree}`;
}

function deserializeTokens(tokens: string[]): Node | undefined {
  const value: string | undefined = tokens.shift();

  if (!value || value === '|') {
    return undefined;
  }

  const left: Node | undefined = deserializeTokens(tokens);
  const right: Node | undefined = deserializeTokens(tokens);

  return new Node(value, left, right);
}

export function deserialize(s: string): Node {
  const tokens: string[] = s.split(',');
  const root: Node | undefined = deserializeTokens(tokens);
  return root ?? new Node('');
}
