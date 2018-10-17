const userForms = [];
let nextButtonManager = false;

const input_checker = (obj) => {
  const dataNo = obj.dataset.formNo;
  const isNull = hasValue(obj.value);
  userForms[dataNo] = isNull;
  renderNextButton(userForms);
}

const hasValue = (value) => {
  let isNull = true;
  
  if (!value) {
    isNull = false;
  }
  return isNull;
}

const renderNextButton = (inputs) => {
  const checkNextCount = [3,5,7,9];
  let hasValueCounter = 0;
  
  for (let currentValue of inputs) {
    if (currentValue) {
      hasValueCounter++;
    }
  }
  
  switch (hasValueCounter) {
    case checkNextCount[0]:
      $(".btn-next").addClass("btn-next-checked");
      nextButtonManager = true;
      break;
    case checkNextCount[1]:
      $(".btn-next").addClass("btn-next-checked");
      nextButtonManager = true;
      break;
    case checkNextCount[2]:
      $(".btn-next").addClass("btn-next-checked");
      nextButtonManager = true;
      break;
    case checkNextCount[3]:
      $(".btn-next").addClass("btn-next-checked");
      nextButtonManager = true;
      break;
    default:
      if ($(".btn-next").hasClass("btn-next-checked")) {
        $(".btn-next").removeClass("btn-next-checked");
      }
      nextButtonManager = false;
  }
}

const actionNextButton = (className) => {
  if (nextButtonManager) {
    $(".user-info").fadeOut();
    if ($(".btn-next").hasClass("btn-next-checked")) {
      $(".btn-next").removeClass("btn-next-checked");
    }
    nextButtonManager = false;
    $(`.${className}`).delay(500).fadeIn();
    
  }
}

const submitAction = () => {
  let contentValue = "";
  contentValue += `${getContentValue("q02")}에 `
  contentValue += `${getContentValue("q03")} 날 /`
  contentValue += `${getContentValue("q04")}에서 /`
  contentValue += `${getContentValue("q05")} /`
  contentValue += `${getContentValue("q06")} /`
  contentValue += `${getContentValue("q07")}`
  
  $('#user-content').val(contentValue);
  $(".user-form-layout").submit();
}

const getContentValue = (inputName) => {
  const currentForName = $(`input[name="${inputName}"]:checked`).val();
  const currentContent = $(`label[for="${currentForName}"] h5`).text();
  return `${currentContent}`
}