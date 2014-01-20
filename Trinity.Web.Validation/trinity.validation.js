var trinity = (trinity !== undefined) ? trinity : {};

trinity.validation = (function () {
    "use strict";

    return {
        isEmail: function (value) {
            var pattern = /^[a-zA-Z0-9\-_]+(\.[a-zA-Z0-9\-_]+)*@[a-z0-9]+(\-[a-z0-9]+)*(\.[a-z0-9]+(\-[a-z0-9]+)*)*\.[a-z]{2,4}$/;
            return pattern.test(value);
        },

        isDate: function (value) {
            var pattern = /^(0?[1-9]|[12][0-9]|3[01])[\/](0?[1-9]|1[012])[\/]\d{4}$/;
            return pattern.test(value);
        },

        isNumber: function (value) {
            var pattern = /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/;
            return pattern.test(value)
        },

        isName: function (value) {
            value = $.trim(value);

            //check minimal length;
            if (value.length < 4) return false;

            //must have at least one blank space
            var spaces = value.split(" ");
            if (!(spaces.length > 1)) return false;

            //there can not be more than 1 blank space together
            for (var i = 1; i < value.length; i++) {
                if (value[i] === " " && value[i - 1] === " ") {
                    return false;
                }
            }

            return true;
        },

        isPhoneNumber: function (value) {
            var pattern = /^[0-9\+]{1,}[0-9\-]{7,15}$/;
            return pattern.test(value);
        }
    }

}());