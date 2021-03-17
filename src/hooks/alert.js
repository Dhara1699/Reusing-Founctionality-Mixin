import { ref } from 'vue';
export default function useAlert(staringVisibility = false) {
  const alertIsVisible = ref(staringVisibility);

  function showAlert() {
    alertIsVisible.value = true;
  }
  function hideAlert() {
    alertIsVisible.value = false;
  }

  return [
    alertIsVisible,
    showAlert,
    hideAlert
  ];
}
