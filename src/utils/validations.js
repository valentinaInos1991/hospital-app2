export function isSafeInput(input) {
    const pattern = /('|--|;|\/\*|\*\/|xp_cmdshell|exec|drop|insert|select|update)/i;
    return !pattern.test(input);
  }
  