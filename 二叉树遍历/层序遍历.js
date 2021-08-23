function levelOrder(root) {
    // 如果root为空，直接返回
    if(!root) {
        return;
    }
    // 队列存储，先进先出
    let queue = [root];
    let res = [];
    // 队列在每一层的时候消费
    while(queue.length) {
        let curFloor = [];
        let length = queue.length; // 消费这一层的队列
        while(length--) {
            root = queue.shift(); // 消费最左边的
            curFloor.push(root.val);
            root.left && queue.push(root.left); // 加入到后面的队列，因为length的关系，本次循环不会消费掉
            root.right && queue.push(root.right);
        }
        res.push(curFloor);
    }
    return res;
}