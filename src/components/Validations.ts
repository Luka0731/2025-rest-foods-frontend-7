export function validateEmail(value: string) {
  let error;
  if (!value) {
    error = "***Required***";
  } else if (
    !/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/i.test(value)
  ) {
    error = "***Invalid email address***";
  }
  return error;
}

export function validatePassword(value: string) {
  let error;
  if (!value) {
    error = "***Required***";
  } else if (value.length < 4) {
    error = "**Password must be 4 Characters long***";
  }
  return error;
}

export function validateOnlyText(value: string) {
  let error;
  if (!value) {
    error = "***Required***";
  } else if (!/^[A-Za-zÀ-ÿ' -]+$/i.test(value)) {
    error = "**No Numbers or ordinary Characters allowed!***";
  }
  return error;
}

export function validatePhoneNumber(value: string) {
  if (!value) return "Required";
  if (!/^\+?\d{7,15}$/.test(value)) return "Invalid phone number";
  return undefined;
}
