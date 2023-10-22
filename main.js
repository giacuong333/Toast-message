function toast({ title = "", message = "", type = "info", duration = 3000 }) {
  const main = document.getElementById("toast");

  if (main) {
    const toast = document.createElement("div");

    // Auto remove toast
    const autoRemoveId = setTimeout(() => {
      main.removeChild(toast);
    }, duration + 1000);

    // Remove toast when clicking on the close button
    toast.onclick = function (e) {
      // when clicking on the close button in the toast element, it will remove the toast
      if (e.target.closest(".toast__close")) {
        main.removeChild(toast);
        clearTimeout(autoRemoveId);
      }
    };

    const icons = {
      success: "fa-solid fa-circle-check",
      info: "fa-solid fa-circle-info",
      warning: "fa-solid fa-circle-exclamation",
      error: "fa-solid fa-circle-minus",
    };

    const icon = icons[type];
    const delay = (duration / 1000).toFixed(2);

    toast.classList.add("toast", `toast--${type}`);
    toast.style.animation = `slideInLeft ease 0.3s, fadeOut linear 1s ${delay}s forwards`;
    toast.innerHTML = `
          <div class="toast__icon">
                    <i class="${icon}"></i>
          </div>
          <div class="toast__body">
                    <h3 class="toast__title">${title}</h3>
                    <p class="toast__message">${message}</p>
          </div>
          <div class="toast__close">
                    <i class="fa-solid fa-circle-xmark"></i>
          </div>      
    `;
    main.appendChild(toast);
  }
}

function showSuccessToast() {
  toast({
    title: "Success",
    message: "Bạn đã đăng ký thành công tài khoản tại trang này.",
    type: "success",
    duration: 1000,
  });
}

function showErrorToast() {
  toast({
    title: "Error",
    message: "Tài khoản của bạn đăng ký không thành công tại trang này.",
    type: "error",
    duration: 3000,
  });
}

function showInfoToast() {
  toast({
    title: "Info",
    message: "Vui lòng đăng ký trước khi đăng nhập.",
    type: "info",
    duration: 3000,
  });
}

function showWarningToast() {
  toast({
    title: "Warning",
    message: "Tài khoản và mật khẩu không được giống nhau.",
    type: "warning",
    duration: 3000,
  });
}
