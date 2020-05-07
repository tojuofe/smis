const tabControl = () => {
  let btnControl = document.querySelectorAll('.btnclick');
  let formContent = document.querySelectorAll('.staff-form');

  for (let i = 0; i < btnControl.length; i++) {
    btnControl[i].addEventListener('click', function () {
      for (let i = 0; i < formContent.length; i++) {
        formContent[i].className = 'staff-form';
      }
      document.getElementById(this.dataset.id).className = 'staff-form active';
      for (let i = 0; i < btnControl.length; i++) {
        btnControl[i].className = 'btnclick';
      }
      this.className = 'btnclick active';
    });
  }
};

export const modalControl = () => {
  const close = document.getElementById('close');
  const open = document.getElementById('open');
  const modal = document.getElementById('modal');

  // Show
  open.addEventListener('click', () => modal.classList.add('show-modal'));
  // // Hide
  close.addEventListener('click', () => modal.classList.remove('show-modal'));

  // Hide Modal on outside Click
  // window.addEventListener('click', (e) =>
  //   e.target === modal ? modal.classList.remove('show-modal') : false
  // );
};

export const modalOpen = () => {
  const open = document.getElementById('open');
  const modal = document.getElementById('modal');

  if (open) {
    modal.classList.add('show-modal');
  }
};

export const modalClose = () => {
  const close = document.getElementById('close');
  const modal = document.getElementById('modal');
  if (close) {
    modal.classList.remove('show-modal');
  }
};

export const editModalClose = () => {
  const close = document.getElementById('close');
  const modal = document.getElementById('editModal');
  if (close) {
    modal.classList.remove('show-modal');
  }
};

export const lgModalClose = () => {
  const close = document.getElementById('close');
  const lgmodal = document.getElementById('modal-lg');

  if (close) {
    lgmodal.classList.remove('show-modal');
  }
};

export const lgModalOpen = () => {
  const open = document.getElementById('open');
  const lgmodal = document.getElementById('modal-lg');

  if (open) {
    lgmodal.classList.add('show-modal');
  }
};

export const toggleNav = () => {
  const toggle = document.getElementById('toggle');

  if (toggle) {
    document.body.classList.toggle('show-nav');
  }
};

export const alertScroll = () => {
  const dashboardRight = document.querySelector('.dashboard-right');

  dashboardRight.scrollTo({ top: 0, behavior: 'smooth' });
};

export default tabControl;
