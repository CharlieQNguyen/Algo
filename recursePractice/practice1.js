function oneToten(i = 1) {
  if (i > 10) {
    // base case
    return;
  }

  console.log(i); // what we want

  i++; // forward progress

  return oneToten(i);
}

oneToten((i = 1));