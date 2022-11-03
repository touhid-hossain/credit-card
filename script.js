const expirationSelect = document.querySelector("[data-expiration-year]");

const currentYear = new Date().getFullYear();
for (let i = currentYear; i < currentYear + 10; i++) {
  const option = document.createElement("option");
  option.value = i;
  option.innerText = i;
  expirationSelect.append(option);
}

document.addEventListener("keydown", (e) => {
  const input = e.target;
  const key = e.key;
  console.log(key);
  if (!isConnectedInput(input)) return;

  switch (key) {
    case "ArrowLeft": {
      if (input.selectionStart === 0 && input.selectionEnd === 0) {
        const prev = input.previousElementSibling;
        prev.focus();
        prev.selectionStart = prev.value.length - 1;
        prev.selectionEnd = prev.value.length - 1;
        e.preventDefault();
      }
      break;
    }
    case "ArrowRight": {
      if (input.selectionStart === input.value.length &&
         input.selectionEnd === input.value.length) {
        const next = input.nextElementSibling;
        next.focus();
        next.selectionStart = 1;
        next.selectionEnd = 1;
        e.preventDefault();
      }
      break;
    }
    default: {
    }
  }
});

function isConnectedInput(input) {
  const parent = input.closest("[data-connected-inputs]");
  return input.matches("input") && parent != null;
}
