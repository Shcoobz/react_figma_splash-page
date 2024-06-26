/**
 * Handles the user interaction for changing the webpage background. Provides clickable divs that change the body's class to apply different backgrounds.
 * @param {string} number - The background number ('1', '2', or '3') to switch to. Each number corresponds to a specific background class.
 * @returns {void} Modifies the DOM directly; does not return a value.
 */
function BackgroundToggles() {
  const changeBackground = (number) => {
    const body = document.body;
    const previousBackground = body.className;

    body.className = '';

    switch (number) {
      case '1':
        if (previousBackground === 'background-1') return;
        body.classList.add('background-1');
        break;
      case '2':
        if (previousBackground === 'background-2') return;
        body.classList.add('background-2');
        break;
      case '3':
        if (previousBackground === 'background-3') return;
        body.classList.add('background-3');
        break;
      default:
        break;
    }
  };

  return (
    <div className='background-toggles' title='Change Background'>
      <div className='background-1' onClick={() => changeBackground('1')}></div>
      <div className='background-2' onClick={() => changeBackground('2')}></div>
      <div className='background-3' onClick={() => changeBackground('3')}></div>
    </div>
  );
}

export default BackgroundToggles;
