function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
};

function sortedArrayToBST(nums) {
    return sortedArrayToBSTRecursive(nums, 0, nums.length);
};

function sortedArrayToBSTRecursive(nums, startIndex, length) {
    // Base case
    if (length === 1) {
        return new TreeNode(nums[startIndex]);
    }

    // The midpoint is the startIndex + length/2
    const mid = Math.floor(startIndex + length/2);

    // Construct midNode
    const midNode = new TreeNode(nums[mid]);
    
    // Connect the left and right children
    midNode.left = sortedArrayToBSTRecursive(
      nums,
      startIndex,
      mid - startIndex
    );
    midNode.right = sortedArrayToBSTRecursive(
      nums,
      mid + 1,
      length - 1 - mid,
    );

    return midNode;
}

