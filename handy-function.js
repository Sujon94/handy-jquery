/**
 * Following function check a given value null/empty/undefined/checked.
 * Return True = given variable/array/object is null/Empty/Undefined.
 * Return False = Given variable/array/object not null/Empty/Undefined.
 */
function nullEmptyUndefinedChecked(value) {
    let trueCounter = 0;
    if (typeof (value) === 'undefined') {
        trueCounter++;  //null
    }

    if (value === undefined) {
        trueCounter++;  //null
    }

    if (value == null) {
        trueCounter++;  //null
    }

    if ($.trim(value) === "") {
        trueCounter++;  //null
    }

    if ($.trim(value) === '') {
        trueCounter++;  //null
    }

    if (value === 0) {
        trueCounter++;  //null
    }

    if (value === "0") {
        trueCounter++;  //null
    }

    /*
    * True = given variable/array/object is null/Empty/Undefined.
    * False = Given variable/array/object not null/Empty/Undefined.
    */
    return trueCounter > 0;
}

function datePickerOnPeriod(selector, minDate, maxDate, currentDate = false, usePredefined = true) {
    var newMinDate = false;
    var newMaxDate = false;
    var byDefaultDate = '';
    if (minDate !== false) {
        newMinDate = moment(minDate, "DD-MM-YYYY");
        //byDefaultDate = newMinDate;
    }
    if (maxDate !== false) {
        newMaxDate = moment(maxDate, "DD-MM-YYYY");
        //byDefaultDate = newMaxDate;
    }
    if (currentDate !== false) {
        byDefaultDate = moment(currentDate, "DD-MM-YYYY");
    }
    var elem = $(selector);
    elem.datetimepicker({
        minDate: newMinDate,
        maxDate: newMaxDate,
        format: 'DD-MM-YYYY',
        ignoreReadonly: true,
        useCurrent: false,
        viewDate: newMinDate,
        defaultDate: byDefaultDate,
        widgetPositioning: {
            horizontal: 'left',
            vertical: 'bottom'
        },
        icons: {
            time: 'bx bx-time',
            date: 'bx bxs-calendar',
            up: 'bx bx-up-arrow-alt',
            down: 'bx bx-down-arrow-alt',
            previous: 'bx bx-chevron-left',
            next: 'bx bx-chevron-right',
            today: 'bx bxs-calendar-check',
            clear: 'bx bx-trash',
            close: 'bx bx-window-close'
        }
    });
    let preDefinedDate;
    if (usePredefined == true) {
        if (elem.val()) {    //Assigned id in input
            preDefinedDate = elem.attr('data-predefined-date');
        } else {  //Assigned id in <div></div>
            preDefinedDate = elem.find("input[type=text]").attr('data-predefined-date');
        }

        if (preDefinedDate != '') {
            let preDefinedDateMomentFormat = moment(preDefinedDate, "DD-MM-YYYY").format("DD-MM-YYYY");
            elem.find('input[type=text]').val(preDefinedDateMomentFormat);
        }
    }

}

function datePickerOnPeriod_top(selector, minDate, maxDate, currentDate = false) {
    var newMinDate = false;
    var newMaxDate = false;
    var byDefaultDate = '';
    if (minDate !== false) {
        newMinDate = moment(minDate, "DD-MM-YYYY");
        //byDefaultDate = newMinDate;
    }
    if (maxDate !== false) {
        newMaxDate = moment(maxDate, "DD-MM-YYYY");
        //byDefaultDate = newMaxDate;
    }
    if (currentDate !== false) {
        byDefaultDate = moment(currentDate, "DD-MM-YYYY");
    }
    var elem = $(selector);
    elem.datetimepicker({
        minDate: newMinDate,
        maxDate: newMaxDate,
        format: 'DD-MM-YYYY',
        ignoreReadonly: true,
        useCurrent: false,
        viewDate: newMinDate,
        defaultDate: byDefaultDate,
        widgetPositioning: {
            horizontal: 'left',
            vertical: 'top'
        },
        icons: {
            time: 'bx bx-time',
            date: 'bx bxs-calendar',
            up: 'bx bx-up-arrow-alt',
            down: 'bx bx-down-arrow-alt',
            previous: 'bx bx-chevron-left',
            next: 'bx bx-chevron-right',
            today: 'bx bxs-calendar-check',
            clear: 'bx bx-trash',
            close: 'bx bx-window-close'
        }
    });
    let preDefinedDate;

    if (elem.val()) {    //Assigned id in input
        preDefinedDate = elem.attr('data-predefined-date');
    } else {  //Assigned id in <div></div>
        preDefinedDate = elem.find("input[type=text]").attr('data-predefined-date');
    }

    if (preDefinedDate != '') {
        let preDefinedDateMomentFormat = moment(preDefinedDate, "DD-MM-YYYY").format("DD-MM-YYYY");
        elem.find('input[type=text]').val(preDefinedDateMomentFormat);
    }
}

function ar_datePickerOnPeriodUp(selector, minDate, maxDate) {
    var newMinDate = false;
    var newMaxDate = false;
    var byDefaultDate = '';
    if (minDate !== false) {
        newMinDate = moment(minDate, "DD-MM-YYYY");
        byDefaultDate = newMinDate;
    }
    if (maxDate !== false) {
        newMaxDate = moment(maxDate, "DD-MM-YYYY");
        byDefaultDate = newMaxDate;
    }
    var elem = $(selector);
    elem.datetimepicker({
        minDate: newMinDate,
        maxDate: newMaxDate,
        format: 'DD-MM-YYYY',
        ignoreReadonly: true,
        useCurrent: false,
        viewDate: newMinDate,
        defaultDate: byDefaultDate,
        widgetPositioning: {
            horizontal: 'left',
            vertical: 'top'
        },
        icons: {
            time: 'bx bx-time',
            date: 'bx bxs-calendar',
            up: 'bx bx-up-arrow-alt',
            down: 'bx bx-down-arrow-alt',
            previous: 'bx bx-chevron-left',
            next: 'bx bx-chevron-right',
            today: 'bx bxs-calendar-check',
            clear: 'bx bx-trash',
            close: 'bx bx-window-close'
        }
    });
    let preDefinedDate;

    if (elem.val()) {    //Assigned id in input
        preDefinedDate = elem.attr('data-predefined-date');
    } else {  //Assigned id in <div></div>
        preDefinedDate = elem.find("input[type=text]").attr('data-predefined-date');
    }

    if (preDefinedDate != '') {
        let preDefinedDateMomentFormat = moment(preDefinedDate, "DD-MM-YYYY").format("DD-MM-YYYY");
        elem.find('input[type=text]').val(preDefinedDateMomentFormat);
    }
}

function datePickerOnPeriodUp(selector, minDate, maxDate) {
    var newMinDate = false;
    if (minDate != false) {
        newMinDate = moment(minDate, "DD-MM-YYYY");
    }
    var elem = $(selector);
    elem.datetimepicker({
        minDate: newMinDate,
        maxDate: moment(maxDate, "DD-MM-YYYY"),
        format: 'DD-MM-YYYY',
        ignoreReadonly: true,
        widgetPositioning: {
            horizontal: 'left',
            vertical: 'top'
        },
        icons: {
            time: 'bx bx-time',
            date: 'bx bxs-calendar',
            up: 'bx bx-up-arrow-alt',
            down: 'bx bx-down-arrow-alt',
            previous: 'bx bx-chevron-left',
            next: 'bx bx-chevron-right',
            today: 'bx bxs-calendar-check',
            clear: 'bx bx-trash',
            close: 'bx bx-window-close'
        }
    });
    let preDefinedDate;

    if (elem.val()) {    //Assigned id in input
        preDefinedDate = elem.attr('data-predefined-date');
    } else {  //Assigned id in <div></div>
        preDefinedDate = elem.find("input[type=text]").attr('data-predefined-date');
    }

    if (preDefinedDate != '') {
        let preDefinedDateMomentFormat = moment(preDefinedDate, "DD-MM-YYYY").format("DD-MM-YYYY");
        elem.find('input[type=text]').val(preDefinedDateMomentFormat);
    }
}

function vendorLedgerDateRangePicker(Elem1, Elem2, minDate, maxDate) {
    let minElem = $(Elem1);
    let maxElem = $(Elem2);
    let newMinDate = false;
    let newMaxDate = false;

    if (minDate !== false) {
        newMinDate = moment(minDate, "DD-MM-YYYY");
    }

    if (maxDate !== false) {
        newMaxDate = moment(maxDate, "DD-MM-YYYY");
    }

    minElem.datetimepicker({
        maxDate: newMaxDate,
        format: 'DD-MM-YYYY',
        ignoreReadonly: true,
        useCurrent: false,
        viewDate: newMinDate,
        //defaultDate: newMinDate,
        widgetPositioning: {
            horizontal: 'left',
            vertical: 'bottom'
        },
        icons: {
            time: 'bx bx-time',
            date: 'bx bxs-calendar',
            up: 'bx bx-up-arrow-alt',
            down: 'bx bx-down-arrow-alt',
            previous: 'bx bx-chevron-left',
            next: 'bx bx-chevron-right',
            clear: 'bx bx-trash',
            close: 'bx bx-window-close',
        }
    });

    maxElem.datetimepicker({
        maxDate: newMaxDate,
        format: 'DD-MM-YYYY',
        ignoreReadonly: true,
        useCurrent: false,
        viewDate: newMaxDate,
        //defaultDate: newMaxDate,
        widgetPositioning: {
            horizontal: 'left',
            vertical: 'bottom'
        },
        icons: {
            time: 'bx bx-time',
            date: 'bx bxs-calendar',
            up: 'bx bx-up-arrow-alt',
            down: 'bx bx-down-arrow-alt',
            previous: 'bx bx-chevron-left',
            next: 'bx bx-chevron-right',
            clear: 'bx bx-trash',
            close: 'bx bx-window-close'
        }
    });

    minElem.on("change.datetimepicker", function (e) {
        maxElem.datetimepicker('minDate', e.date);
    });

    maxElem.on("change.datetimepicker", function (e) {
        minElem.datetimepicker('maxDate', e.date);
    });
}

function dateRangePicker(Elem1, Elem2) {
    let minElem = $(Elem1);
    let maxElem = $(Elem2);

    minElem.datetimepicker({
        format: 'DD-MM-YYYY',
        widgetPositioning: {
            horizontal: 'left',
            vertical: 'bottom'
        },
        icons: {
            time: 'bx bx-time',
            date: 'bx bxs-calendar',
            up: 'bx bx-up-arrow-alt',
            down: 'bx bx-down-arrow-alt',
            previous: 'bx bx-chevron-left',
            next: 'bx bx-chevron-right',
            today: 'bx bxs-calendar-check',
            clear: 'bx bx-trash',
            close: 'bx bx-window-close'
        }
    });

    maxElem.datetimepicker({
        format: 'DD-MM-YYYY',
        widgetPositioning: {
            horizontal: 'left',
            vertical: 'bottom'
        },
        icons: {
            time: 'bx bx-time',
            date: 'bx bxs-calendar',
            up: 'bx bx-up-arrow-alt',
            down: 'bx bx-down-arrow-alt',
            previous: 'bx bx-chevron-left',
            next: 'bx bx-chevron-right',
            today: 'bx bxs-calendar-check',
            clear: 'bx bx-trash',
            close: 'bx bx-window-close'
        }
    });

    minElem.on("change.datetimepicker", function (e) {
        //minElem.datetimepicker('minDate', moment().millisecond(0).second(0).minute(0).hour(0)); // Stopping to select past days from today
        maxElem.datetimepicker('minDate', e.date);
    });

    maxElem.on("change.datetimepicker", function (e) {
        minElem.datetimepicker('maxDate', e.date);
    });

    let preDefinedDateMin;
    let preDefinedDateMax

    if (minElem.val() && maxElem.val()) {    //Assigned id in input
        preDefinedDateMin = minElem.attr('data-predefined-date');
        preDefinedDateMax = maxElem.attr('data-predefined-date');
    } else {  //Assigned id in <div></div>
        preDefinedDateMin = minElem.find("input[type=text]").attr('data-predefined-date');
        preDefinedDateMax = maxElem.find("input[type=text]").attr('data-predefined-date');
    }

    if (preDefinedDateMin) {
        let preDefinedDateMomentFormat = moment(preDefinedDateMin, "YYYY-MM-DD").format("DD-MM-YYYY");
        minElem.datetimepicker('defaultDate', preDefinedDateMomentFormat);
        minElem.datetimepicker('maxDate', preDefinedDateMax);

        maxElem.datetimepicker('minDate', preDefinedDateMin);
    }

    /*if (preDefinedDateMax) {
        console.log(preDefinedDateMax);
        let preDefinedDateMomentFormat = moment(preDefinedDateMax, "YYYY-MM-DD").format("DD-MM-YYYY");
        maxElem.datetimepicker('defaultDate', preDefinedDateMomentFormat);
    }*/
}

function accountStatementDateRangePicker(Elem1, Elem2, callback) {
    let minElem = $(Elem1);
    let maxElem = $(Elem2);
    let lastMonthMaxDate = moment().subtract(1, 'month').endOf('month').format("DD-MM-YYYY").toString();
    let lastMonthMinDate = moment().subtract(1, 'month').startOf('month').format("DD-MM-YYYY").toString();
    minElem.datetimepicker({
        format: 'DD-MM-YYYY',
        widgetPositioning: {
            horizontal: 'left',
            vertical: 'bottom'
        },
        icons: {
            time: 'bx bx-time',
            date: 'bx bxs-calendar',
            up: 'bx bx-up-arrow-alt',
            down: 'bx bx-down-arrow-alt',
            previous: 'bx bx-chevron-left',
            next: 'bx bx-chevron-right',
            today: 'bx bxs-calendar-check',
            clear: 'bx bx-trash',
            close: 'bx bx-window-close'
        }
    });

    maxElem.datetimepicker({
        format: 'DD-MM-YYYY',
        widgetPositioning: {
            horizontal: 'left',
            vertical: 'bottom'
        },
        icons: {
            time: 'bx bx-time',
            date: 'bx bxs-calendar',
            up: 'bx bx-up-arrow-alt',
            down: 'bx bx-down-arrow-alt',
            previous: 'bx bx-chevron-left',
            next: 'bx bx-chevron-right',
            today: 'bx bxs-calendar-check',
            clear: 'bx bx-trash',
            close: 'bx bx-window-close'
        }
    });

    minElem.datetimepicker('maxDate', lastMonthMaxDate);
    maxElem.datetimepicker('maxDate', lastMonthMaxDate);

    minElem.datetimepicker('defaultDate', lastMonthMinDate);
    maxElem.datetimepicker('defaultDate', lastMonthMaxDate);


    minElem.on("change.datetimepicker", function (e) {
        maxElem.datetimepicker('minDate', e.date);
    });

    maxElem.on("change.datetimepicker", function (e) {
        minElem.datetimepicker('maxDate', e.date);
    });

}

/**
 * This function is useful for removing dynamic rows of a table.
 * @param {string} selector
 */
function resetTablesDynamicRow(selector = "") {
    if (nullEmptyUndefinedChecked(selector)) {
        $("table >tbody >tr").remove();
    } else {
        $(selector + " >tbody >tr").remove();
    }
}

/**
 * This function is useful for checking negative value.
 * @param {int} value
 */
function is_negative(value) {
    let digit = parseFloat(value);
    let val = Math.sign(digit);
    return val === -1;  // true = negative number; false = non-negative number
}

//Cash Account setup and Revenue account setup common methods
/**
 * This function is useful for checking empty field for any event.
 * Selectors must be array of id's or classes.
 * validationMsg is optional
 * You can specify custom message for each input field
 * ex:
 *      fieldsAreSet(["#id"]) or fieldsAreSet(["#id"],"Your Message")
 *      or fieldsAreSet(["#id1:only for this","#id2"])
 *      or fieldsAreSet(["#id1:Look:this will also work","#id2"])
 *
 * return true //if all fields are set
 * return false //if any specified field is not set
 * @param {array} selectors
 * @param {string} msg
 * @returns {boolean}
 */
function fieldsAreSet(selectors,validationMsg= "Missing input") {
    let unsetCounter = selectors.length;
    selectors.forEach(function (element) {
        let object;
        let text;
        if (element.match(/:/)){
            let objects = element.split(/:(.*)/s);  //Only consider the first occurance
            object = objects[0];
            text = objects[1];
        }else{
            object = element;
            text = validationMsg;
        }

        if ($(object).val().length === 0 || $(element).val() == 0) {
            $(object).notify(text, "error");
            unsetCounter--;
        }

    });
    return unsetCounter === selectors.length;
}

/**
 *This function is useful to reset input fields manually
 * Just feed the array of id's or class's
 * @param {array} selectors
 */
function resetField(selectors) {
    selectors.forEach(function (element) {
        if ($(element).hasClass('select2')) {
            /*
            * Select2 show options inside <span>. That's why select2 resetting using it's own method.
            * */
            $(element).val(null).trigger('change');
        } else {
            $(element).val('');
        }
    });
}

/**
 *This function is useful to check if a new dynamic row added in table
 * pass table id or class as parameter
 * @param {string} tableSelector
 */
function isLineAdded(tableSelector) {
    let visibleLineCounter = 0;
    $(tableSelector + ' tbody tr').each(function () {
        if ($(this).is(':visible')) {
            visibleLineCounter++;
        }
    });

    return visibleLineCounter > 0;
}

function resetHeaderField() {
    $("#department").select2().val('').trigger('change');
    $("#bill_section,.bill_section").select2().val('').trigger('change');
    $("#bill_register,.bill_register").select2().val('').empty("");
}

/**
 *This function is to add zeros in the middle of two digit
 * Provide first digit rest of the digits will be zeros.
 * provide first and last digit rest of the digits will be zeros
 * @param {integer}
 */
function addZerosInAccountId(selector, offset = 10) {
    let accountID = $(selector).val();
    let idLength = accountID.length;
    let idArray = accountID.split('');
    let zeros = 0;
    let zeroPadding = '';

    if (!nullEmptyUndefinedChecked(accountID) && idLength < offset) {
        zeros = Number(offset) - Number(idLength);
        for (let i = 0; i < zeros; i++) {
            zeroPadding += '0';
        }
        idArray.splice(1, 0, zeroPadding);
        $(selector).val(idArray.join(""));
    }
}

/**
 *This function is to add confirmation modal before form submit
 * Used Swal alert box
 * use isConfirmOnSubmit class in form name
 */
$(".isConfirmOnSubmit").on('submit', function (e) {
    e.preventDefault();
    let selector = this;
    swal.fire({
        text: 'Save Confirm?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.value == true) {
            selector.submit();
        }
    })
});

/*
* Focus on me
* */
function focusOnMe(selector) {
    $('html, body').animate({scrollTop: ($(selector).offset().top - 350)}, 2000);
    $(selector).focus();
}

/**
 * Following function translate an amount into BDT in Taka.
 */
function amountTranslate(amount) {
    let numberSet1 = ['Zero', 'One ', 'Two ', 'Three ', 'Four ', 'Five ', 'Six ', 'Seven ', 'Eight ', 'Nine ', 'Ten ', 'Eleven ', 'Twelve ', 'Thirteen ', 'Fourteen ', 'Fifteen ', 'Sixteen ', 'Seventeen ', 'Eighteen ', 'Nineteen '];
    let numberSet2 = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
    let unit = ['Hundred', 'Thousand', 'Lakh', 'Crore'];

    amount = roundToTwoDecimal(amount);
    let numArray = amount.toString().split('.');
    let taka = numArray[0];
    let paisa = numArray[1];

    let takaInWord = takaToWord(taka) + "Taka";
    let paisaInWord = paisaToWord(paisa);

    function takaToWord(taka) {
        let inWord = '';
        let digitGroups = [];   //To hold four groups of digits (hundred, thousand, lack, crore)
        let groupText = [];  //To translate and hold four groups of digits (hundred, thousand, lack, crore) text

        if ((taka != 0) && (taka.toString().length > 0)) {
            taka = parseInt(taka);

            //Grouping total amounts in 3, 2, 2, 2 for hundred, thousand, lakh and crore
            for (let i = 0; i < 4; i++) {
                if (taka != 0) {
                    if (i == 0) {
                        //For hundred
                        digitGroups[i] = Math.floor(taka % 1000);
                        taka /= 1000;
                    } else if (i == 3) {
                        //For crores
                        digitGroups[i] = Math.floor(taka % 100000000000);
                        taka /= 100000000000;
                    } else {
                        //For thousand and lakh
                        digitGroups[i] = Math.floor(taka % 100);
                        taka /= 100;
                    }
                }
            }

            //Grouping total amounts in words according to its corresponding digit group
            for (let i = 0; i < 4; i++) {
                switch (i) {
                    case 0:
                        //Hundred
                        let t0 = threeDigitGroupToText(digitGroups[i]);
                        if (!nullEmptyUndefinedChecked(t0)) {
                            groupText[i] = t0;
                        }
                        break;
                    case 1:
                        //Thousand
                        let t1 = twoDigitGroupToText(digitGroups[i], '');
                        if (!nullEmptyUndefinedChecked(t1)) {
                            if (nullEmptyUndefinedChecked(groupText[i - 1])) {
                                groupText[i] = t1 + unit[i] + " ";
                            } else {
                                groupText[i] = t1 + unit[i] + ", ";
                            }
                        }
                        break;
                    case 2:
                        //Lakh
                        let t2 = twoDigitGroupToText(digitGroups[i], '');
                        if (!nullEmptyUndefinedChecked(t2)) {
                            if (nullEmptyUndefinedChecked(groupText[i - 1])) {
                                groupText[i] = t2 + unit[i] + " ";
                            } else {
                                groupText[i] = t2 + unit[i] + ", ";
                            }
                        }
                        break;
                    case 3:
                        //Crore
                        let t3 = croreDigitGroupToText(digitGroups[i], '');
                        if (!nullEmptyUndefinedChecked(t3)) {
                            if (!nullEmptyUndefinedChecked(t3)) {
                                if (nullEmptyUndefinedChecked(groupText[i - 1])) {
                                    groupText[i] = t3 + unit[i] + " ";
                                } else {
                                    groupText[i] = t3 + unit[i] + ", ";
                                }
                            }
                        }
                        break;
                }
            }

            //Merging texts
            for (let i = groupText.length - 1; i >= 0; i--) {
                if (!nullEmptyUndefinedChecked(groupText[i]))
                    inWord += groupText[i];
            }

            //Return to parent call
            return inWord;
        } else {
            return numberSet1[0] + " ";
        }
    }

    function paisaToWord(paisa) {
        if (!nullEmptyUndefinedChecked(paisa) && paisa.toString().length > 0 && paisa != '00') {
            return ', ' + twoDigitGroupToText(paisa, '') + "Paisa Only";
        } else {
            return " Only";
        }
    }

    function twoDigitGroupToText(number, preText) {
        if (number != 0) {
            let tensDiv = Math.floor(number / 10);
            let tensMod = number % 10;

            if (tensDiv == 1) {
                preText += ' ' + numberSet1["" + tensDiv + tensMod];  //This line of statement to translate 10-19 digits
            } else {
                preText += numberSet2[tensDiv];
                if (tensMod != 0) {
                    preText += ' ' + numberSet1[tensMod];
                }
            }

        }
        return preText += ' ';
    }

    function threeDigitGroupToText(number) {
        let hundreds = 0;
        let tensUnits = 0;
        let text = '';

        if (number != 0) {
            hundreds = Math.floor(number / 100);
            tensUnits = number % 100;

            if (hundreds != 0) {
                text += numberSet1[hundreds] + '' + unit[0];

                if (tensUnits != 0) {
                    text += ' and ';
                } else {
                    text += ' ';
                }
            }

            if (tensUnits >= 20) {
                text = twoDigitGroupToText(tensUnits, text);
            } else if (tensUnits != 0) {
                text += numberSet1[tensUnits];
            }
        }

        return text;
    }

    function croreDigitGroupToText(number) {
        if (number != 0) {
            if ((number.toString().length <= 2)) {
                return twoDigitGroupToText(number, '');
            } else if ((number.toString().length > 2)) {
                return takaToWord(number);    //Recursive call for crore
            } else {
                return '';
            }
        } else {
            return '';
        }
    }

    return takaInWord + paisaInWord;
}

function getFunctionTypeOnModule(moduleId, selector) {
    if (!nullEmptyUndefinedChecked(moduleId)) {
        let response = $.ajax({
            url: APP_URL + "/ajax/functions-on-module",
            data: {moduleId: moduleId}
        });

        response.done(function (res) {
            $(selector).html(res);
        });

        response.fail(function (jqXHR, textStatus) {
            console.log("Exception Occurred");
        });
    } else {
        $(selector).html("<option value=''>Select Function</option>");
    }
}

function getBillSectionOnFunction(functionId, selector) {
    if (!nullEmptyUndefinedChecked(functionId)) {
        let response = $.ajax({
            url: APP_URL + "/ajax/billSection-on-functions",
            data: {functionId: functionId}
        });

        response.done(function (res) {
            $(selector).html(res);
        });

        response.fail(function (jqXHR, textStatus) {
            console.log("Exception Occurred");
        });
    } else {
        $(selector).html("<option value=''><Select></Select></option>");
    }
}


/**
 * Following function keep two digits after decimal in a fractional number .
 * Follows 5'rule
 */
function roundToTwoDecimal(number) {
    let numberArray = number.toString().split('.');
    let decimal = numberArray[0]
    let afterDecimal = numberArray[1];

    if (!nullEmptyUndefinedChecked(afterDecimal)) {
        if ((parseInt(afterDecimal) != 0) && (afterDecimal.length > 1)) {
            if (afterDecimal.toString().length >= 3) {
                if ((parseInt(afterDecimal[2]) >= 5)) {
                    afterDecimal = afterDecimal[0] + (parseInt(afterDecimal[1]) + 1);
                } else {
                    afterDecimal = afterDecimal[0] + afterDecimal[1];
                }
            } else if (afterDecimal.toString().length == 1) {  //example: 12.5 will be 12.50
                afterDecimal = afterDecimal[0] + 0;
            }
            return decimal + '.' + afterDecimal;
        }/* else {
            return decimal;
        }*/
    } /*else {
        return number;
    }*/
    return number;
}

/**
 * Following function keep two digits after decimal in a fractional number .
 * Without 5'rule
 */
function roundToTwoDecimalWithoutRule(number) {
    let numberArray = number.toString().split('.');
    let decimal = numberArray[0]
    let afterDecimal = numberArray[1];

    if (!nullEmptyUndefinedChecked(afterDecimal)) {
        if ((parseInt(afterDecimal) != 0) && (afterDecimal.length > 1)) {
            if (afterDecimal.toString().length >= 3) {
                afterDecimal = afterDecimal[0] + afterDecimal[1];
            }
            return decimal + '.' + afterDecimal;
        }
    }
    return number;
}

/**
 * Following function returns an amount with comma separated, Supports both American and British
 */
function getCommaSeparatedValue(amountParam, americanBritish = 'B') {
    let amount = '';
    /**Comma exist in amount remove them**/
    if (amountParam.match(/,/)){
        amount = removeCommaFromValue(amountParam);
    }else{
        amount = amountParam;
    }

    if (nullEmptyUndefinedChecked(amount.length)){
        return false;
    }

    let array = amount.split('.');
    let decimal = array[0];
    let fraction = array[1];
    /**Converting decimal values to array.**/
    let decimalArray = decimal.split('');
    let length = decimalArray.length;

    /**When decimal is not 0 nor null and total digit length greater than 3
     * then comma applied, either given number returned.
     **/
    if ((decimal != 0 || !nullEmptyUndefinedChecked(decimal)) && length > 3) {
        /**
         Total steps needed to add the comma.
         **/
        let steps = Math.floor(length / 2);
        let position = length;
        for (let i = 0; i < steps; i++) {
            if (americanBritish.toUpperCase() === 'B') {
                if (i === 0) {
                    /**Three step comma.**/
                    position -= 3;
                } else {
                    /**Two step comma.**/
                    position -= 2;
                }
            } else {
                position -= 3;
            }

            if (position > 0) {
                /**Adding comma to the length position.**/
                decimalArray.splice(position, 0, ',')
            }
        }
        /**To concat all the array elements.**/
        let newDecimal = decimalArray.join('');

        if (amount.indexOf('.') != -1) {
            return newDecimal + '.' + fraction;
        } else {
            return newDecimal;
        }

        /* if (!nullEmptyUndefinedChecked(fraction)) {
             return newDecimal + '.' + fraction;
         } else {
             if (amount.indexOf('.') != -1) {
                 return newDecimal + '.';
             } else {
                 return newDecimal;
             }
         }*/
    } else {
        return amount;
    }

}

/**
 * Following function returns an amount without comma.
 */
function removeCommaFromValue(amount) {

        let array = amount.split('.');
        let decimal = array[0].split(',');
        let fraction = array[1];
        let newDecimal = decimal.join('');

        if (amount.indexOf('.') != -1) {
            return newDecimal + '.' + fraction;
        } else {
            return newDecimal;
        }


    /*if (!nullEmptyUndefinedChecked(fraction)) {
        return decimal.join('') + '.' + fraction;
    } else {
        if (amount.indexOf('.') != -1) {
            return decimal.join('') + '.'+fraction;
        } else {
            return decimal.join('');
        }
    }*/
}

/**  Animate loader off screen **/

/*$(window).on('load', function() {
    // Animate loader off screen
    $(".se-pre-con").fadeOut("slow");
});*/

/**
 * Following function set only maxlength value of amount field.
 * May bug exist.
 */
function maxLengthValidAmount(element) {
    let amount = removeCommaFromValue($(element).val());
    let valueArray = amount.toString().split('.');
    let entryValLength = $(element).val().length;

    let maxAmount = $(element).attr('max');
    let enteredAmount = removeCommaFromValue($(element).val());
    let newVal = '';
    if (parseFloat(enteredAmount) > parseFloat(maxAmount)){
        $(element).val(0);
    }
    /*if (valueArray.length == 2) {
        if ((valueArray[0].length + valueArray[1].length) > maxLength) {
            newVal = value.toString().substr(0, maxLength);
            $(element).val(newVal);
            /!*if (valueArray[0].toString().length > maxLength-3){
                //valueArray[0] = valueArray[0].toString().substr(0,maxLength-2);
                newVal = value.toString().substr(0,maxLength);
                console.log("hello:"+newVal);
            }*!/
            //newVal = valueArray[0].toString()+'.'+valueArray[1].toString();
        }

        if (valueArray[1].length > 2) {
            valueArray[1] = valueArray[1][0] + valueArray[1][1];
            newVal = valueArray[0].toString() + '.' + valueArray[1].toString();
            $(element).val(newVal);
        }

    } else if (entryValLength > maxLength) {
        newVal = value.toString().substr(0, maxLength);
        $(element).val(newVal);
    } else {
        $(element).val(value);
    }*/
}

/**
 * Following function set only maxlength value .
 *
 */
function maxLengthValid(element) {
    let maxLength = $(element).attr('maxlength');
    let entryValLength = $(element).val().length;
    let value = $(element).val();
    let newVal = '';

    if (entryValLength > maxLength) {
        newVal = value.toString().substr(0, maxLength);
        $(element).val(newVal);
    } else {
        $(element).val(value);
    }
}

function pascal(str) {
    let string = str.split(" ");
    let restC = "";
    $.each(string, function (index, value) {
        /*if (/[^a-zA-Z]/)*/
        let firstC = value[0];
        restC += (index !== 0) ? " " + firstC + value.substring(1,).toLowerCase() : firstC + value.substring(1,).toLowerCase();
    })
    return restC;
    /*return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index === 0 ? word.toUpperCase() : word.toLowerCase();
    }).replace(/\s+/g, '');*/
}


$(window).on('load', function () {
    $("#loading_page_loader").fadeOut('slow');
});

function makeSelect2Request(selector, url, selectedOptionDtlURL, callback) {
    $(selector).select2({
        placeholder: "<Select>",
        width: "100%",
        allowClear: false,
        ajax: {
            url: url,
            data: function (params) {
                if (params.term) {
                    if (params.term.trim().length < 1) {
                        return false;
                    }
                } else {
                    return false;
                }

                return params;
            },
            dataType: 'json',
            processResults: function (data) {
                var formattedResults = $.map(data, function (obj, idx) {
                    obj.id = obj.option_id;
                    obj.text = obj.option_text;
                    return obj;
                });
                formattedResults.unshift({
                    id:0,
                    text:'<select>'
                });
                return {
                    results: formattedResults,
                };
            },
        }
    });

    if (
        ($(selector).attr('data-option-id') !== undefined) && ($(selector).attr('data-option-id') !== null) && ($(selector).attr('data-option-id') !== '')
    ) {
        selectDefaultOption($(selector), selectedOptionDtlURL, $(selector).attr('data-option-id'));
    }

    $(selector).on('select2:select', function (e) {
        var selectedOption = e.params.data;
        var that = this;

        if (selectedOption.option_id) {
            $.ajax({
                type: "GET",
                url: selectedOptionDtlURL,
                success: function (data) {
                    callback(that, data);
                },
                error: function (data) {
                    alert('error');
                }
            });
        }
    });
}

function selectDefaultOption(selector, selectedOptionDtlURL, optionId) {
    $.ajax({
        type: 'GET',
        url: selectedOptionDtlURL + optionId,
    }).then(function (data) {
        // create the option and append to Select2
        var option = new Option(data.option_text, data.option_id, true, true);
        selector.append(option).trigger('change');

        // manually trigger the `select2:select` event
        selector.trigger({
            type: 'select2:select',
            params: {
                data: data
            }
        });
    });
}

function dateTimePicker(selector) {
    var elem = $(selector);
    elem.datetimepicker({
        format: 'YYYY-MM-DD LT',
        widgetPositioning: {
            horizontal: 'left',
            vertical: 'bottom'
        },
        icons: {
            time: 'bx bx-time',
            date: 'bx bxs-calendar',
            up: 'bx bx-up-arrow-alt',
            down: 'bx bx-down-arrow-alt',
            previous: 'bx bx-chevron-left',
            next: 'bx bx-chevron-right',
            today: 'bx bxs-calendar-check',
            clear: 'bx bx-trash',
            close: 'bx bx-window-close'
        }
    });

    let preDefinedDate = elem.attr('data-predefined-date');

    if (preDefinedDate) {
        let preDefinedDateMomentFormat = moment(preDefinedDate, "YYYY-MM-DD HH:mm").format("YYYY-MM-DD HH:mm A");
        elem.datetimepicker('defaultDate', preDefinedDateMomentFormat);
    }
}

function datePicker(selector) {
    var elem = $(selector);
    var currentDate =
        elem.datetimepicker({
            format: 'DD-MM-YYYY',
            ignoreReadonly: true,
            widgetPositioning: {
                horizontal: 'left',
                vertical: 'bottom'
            },
            icons: {
                time: 'bx bx-time',
                date: 'bx bxs-calendar',
                up: 'bx bx-up-arrow-alt',
                down: 'bx bx-down-arrow-alt',
                previous: 'bx bx-chevron-left',
                next: 'bx bx-chevron-right',
                today: 'bx bxs-calendar-check',
                clear: 'bx bx-trash',
                close: 'bx bx-window-close'
            }
        });
    let preDefinedDate;

    if (elem.val()) {    //Assigned id in input
        preDefinedDate = elem.attr('data-predefined-date');
    } else {  //Assigned id in <div></div>
        preDefinedDate = elem.find("input[type=text]").attr('data-predefined-date');
    }

    if (!nullEmptyUndefinedChecked(preDefinedDate)) {
        let preDefinedDateMomentFormat = moment(preDefinedDate, "DD-MM-YYYY").format("DD-MM-YYYY");
        elem.find('input[type=text]').val(preDefinedDateMomentFormat);
    }

    elem.datetimepicker('maxDate', currentDate);
    elem.datetimepicker('defaultDate', currentDate);
}

function yearPicker(selector) {
    var elem = $(selector);
    elem.datetimepicker({
        format: 'YYYY',
        ignoreReadonly: true,
        widgetPositioning: {
            horizontal: 'left',
            vertical: 'bottom'
        },
        icons: {
            time: 'bx bx-time',
            date: 'bx bxs-calendar',
            up: 'bx bx-up-arrow-alt',
            down: 'bx bx-down-arrow-alt',
            previous: 'bx bx-chevron-left',
            next: 'bx bx-chevron-right',
            today: 'bx bxs-calendar-check',
            clear: 'bx bx-trash',
            close: 'bx bx-window-close'
        }
    });
    /*let preDefinedDate;

    if (elem.val()) {    //Assigned id in input
        preDefinedDate = elem.attr('data-predefined-date');
    } else {  //Assigned id in <div></div>
        preDefinedDate = elem.find("input[type=text]").attr('data-predefined-date');
    }

    if (!nullEmptyUndefinedChecked(preDefinedDate)) {
        let preDefinedDateMomentFormat = moment(preDefinedDate,).format("YYYY");
        elem.find('input[type=text]').val(preDefinedDateMomentFormat);
    }*/
}

function convertDate(date) {
    function pad(s) {
        return (s < 10) ? '0' + s : s;
    }

    var d = new Date(date);
    return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join('-');
}

$('.mobile-validation').on('keypress', function (e) {
    // e is event.
    var keyCode = e.which;
    /*
      8 - (backspace)
      32 - (space)
      48-57 - (0-9)Numbers
    */

    if ((keyCode != 8 || keyCode == 32) && (keyCode < 48 || keyCode > 57)) {
        return false;
    }
});

$('.global-number-validation').on('keypress', function (e) {
    // e is event.
    var keyCode = e.which;
    /*
      8 - (backspace)
      32 - (space)
      48-57 - (0-9)Numbers
    */

    if ((keyCode != 8 || keyCode == 32) && (keyCode < 48 || keyCode > 57)) {
        return false;
    }
});

