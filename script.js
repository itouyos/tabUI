document.addEventListener("DOMContentLoaded", function () {
// �S�^�u�{�^���v�f���擾
const tabButtons = document.querySelectorAll(".tab-button");
// �S�^�u�R���e���c�v�f���擾
const tabContents = document.querySelectorAll(".tab-content");

// �^�u�؂�ւ��֐�
function showTab(targetId) {
// �S�^�u�R���e���c����x��\����
tabContents.forEach(content => {
content.classList.remove("active");
});
// �S�^�u�{�^���̃A�N�e�B�u��Ԃ�����
tabButtons.forEach(button => {
button.classList.remove("active");
});
// �Ώۂ̃^�u�R���e���c�̂ݕ\��
const targetContent = document.getElementById(targetId);
if (targetContent) {
targetContent.classList.add("active");
}
// �Ή�����^�u�{�^�����A�N�e�B�u��
document.querySelector(button[data-target="${targetId}"]).classList.add("active");
}

// �{�^���N���b�N���̃C�x���g�ݒ�
tabButtons.forEach(button => {
button.addEventListener("click", () => {
// data-target��������\���������^�u��ID���擾
const targetId = button.getAttribute("data-target");
showTab(targetId);
});
});
});