//process.stdout.write('\x07') would not play a sound on my system, so I will be using '.' as an input instead of '\x07'.

const args = process.argv.slice(2);

for (let arg of args) {
  if (arg >= 0) {
    setTimeout(() => {
      process.stdout.write('.');
    }, arg * 1000);
  }
}