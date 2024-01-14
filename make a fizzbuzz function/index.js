function fizzbuzz() {
  for (i = 1; i <= 50; i++) {
    if (i % 3 == 0 & i % 5 == 0) {
      console.log("fizz buzz____",i);
    } else if (i % 3 == 0) {
      console.log("fizz____", i);
    } else if (i % 5 == 0) {
      console.log("buzz___", i);
    } else {
      console.log(i);
    }
  }
}
fizzbuzz();
