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