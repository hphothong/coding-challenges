import { Node, serialize, deserialize } from './solution';

describe('given a valid binary tree', () => {
  it('should correctly serialize the root node', () => {
    const node: Node = new Node('root');

    const serialized: string = serialize(node);

    expect(serialized).toBe('root,|,|');
  });

  it('should correctly serialize the root, left, and right nodes', () => {
    const node: Node = new Node('root', new Node('left'), new Node('right'));

    const serialized: string = serialize(node);

    expect(serialized).toBe('root,left,|,|,right,|,|');
  });

  it('should correctly serialize and deserialize', () => {
    const node = new Node('root', new Node('left', new Node('left.left')), new Node('right'));

    expect(deserialize(serialize(node)).left?.left?.val).toBe('left.left');
  });
});
