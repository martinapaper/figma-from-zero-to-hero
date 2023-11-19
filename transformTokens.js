const StyleDictionary = require('style-dictionary');
const baseConfig = require('./config.json');

// dipendenza per trasformare colori https://www.npmjs.com/package/colorfuls
const colorfuls = require("colorfuls");
const { Colorfuls } = require('colorfuls');
const { default: translate } = require('colorfuls');
const { default: Color } = require('colorfuls');


StyleDictionary.registerTransform({
    name: 'size/px',
    type: 'value',
    matcher: token => {
        return token.unit === 'pixel' && token.value !== 0
    },
    transformer: token => {
        return `${token.value}px`
    },
})

StyleDictionary.registerTransform({
    name: 'size/percent',
    type: 'value',
    matcher: token => {
        return token.unit === 'percent' && token.value !== 0
    },
    transformer: token => {
        return `${token.value}%`
    },
})

//*** WEB //***
// Metodo che registra la trasformazione colore per linguaggi web (css, scss, less)
StyleDictionary.registerTransform({
    name: 'web/colorTransform',
    type: 'value',
    matcher: function(json) {
        return json.type === 'boxShadow' || json.typeException === 'color-gradient' || json.typeException === 'color-overlay';
    },
    transformer: function(prop) {
        // Metodo colorTranslateforPlatform che smista in base al type la trasformazione del colore al metodo corretto
        const type = prop.typeException !== undefined ? prop.typeException : prop.type;
        return colorTranslateforPlatform(type, prop, 'web/colorTransform')
    }
})

// ******************************************************************************** //

//IOS
// Metodo che registra la trasformazione colore per ios
StyleDictionary.registerTransform({
    name: 'ios/colorTransform',
    type: 'value',
    matcher: function(json) {
        return json.type === 'boxShadow' || json.typeException === 'color-gradient' || json.typeException === 'color-overlay';
    },
    transformer: function(prop) {
        // Metodo colorTranslateforPlatform che smista in base al type la trasformazione del colore al metodo corretto
        const type = prop.typeException !== undefined ? prop.typeException : prop.type;
        return colorTranslateforPlatform(type, prop, 'ios/colorTransform');
    }
})

// ******************************************************************************** //

//SWIFT
// Metodo che registra la trasformazione colore per swift
StyleDictionary.registerTransform({
    name: 'swift/colorTransform',
    type: 'value',
    matcher: function(json) {
        return json.type === 'boxShadow' || json.typeException === 'color-gradient' || json.typeException === 'color-overlay';
    },
    transformer: function(prop) {
        // Metodo colorTranslateforPlatform che smista in base al type la trasformazione del colore al metodo corretto
        const type = prop.typeException !== undefined ? prop.typeException : prop.type;
        return colorTranslateforPlatform(type, prop, 'swift/colorTransform')
    }
})

// ******************************************************************************** //

//KOTLIN
// --> IN ATTESA SINTASSI PER OVERLAY E GRADIENT
// Metodo che registra la trasformazione colore per kotlin (android)
StyleDictionary.registerTransform({
    name: 'kotlin/colorTransform',
    type: 'value',
    matcher: function(json) {
        return json.type === 'boxShadow' || json.typeException === 'color-gradient' || json.typeException === 'color-overlay';
    },
    transformer: function(prop) {
        // Metodo colorTranslateforPlatform che smista in base al type la trasformazione del colore al metodo corretto
        const type = prop.typeException !== undefined ? prop.typeException : prop.type;
        return colorTranslateforPlatform(type, prop, 'kotlin/colorTransform')
    }
})

// ******************************************************************************** //

//ANDROID
// --> IN ATTESA SINTASSI PER OVERLAY E GRADIENT
// Metodo che registra la trasformazione colore per (android)
StyleDictionary.registerTransform({
    name: 'android/colorTransform',
    type: 'value',
    matcher: function(json) {
        return json.type === 'boxShadow' || json.typeException === 'color-gradient' || json.typeException === 'color-overlay';;
    },
    transformer: function(prop) {
        // Metodo colorTranslateforPlatform che smista in base al type la trasformazione del colore al metodo corretto
        const type = prop.typeException !== undefined ? prop.typeException : prop.type;
        return colorTranslateforPlatform(type, prop, 'android/colorTransform')
    }
})

StyleDictionary.registerTransformGroup({
    name: 'custom/css',
    transforms: StyleDictionary.transformGroup['css'].concat([
        'size/px',
        'size/percent',
        'web/colorTransform'
    ]),
})

StyleDictionary.registerTransformGroup({
    name: 'custom/less',
    transforms: StyleDictionary.transformGroup['less'].concat([
        'size/px',
        'size/percent',
        'web/colorTransform'
    ]),
})

StyleDictionary.registerTransformGroup({
    name: 'custom/scss',
    transforms: StyleDictionary.transformGroup['less'].concat([
        'size/px',
        'size/percent',
        'web/colorTransform'
    ]),
})


StyleDictionary.registerTransformGroup({
    name: 'ios-swift-separate',
    transforms: StyleDictionary.transformGroup['ios-swift-separate'].concat([
        'swift/colorTransform'
    ]),
})

StyleDictionary.registerTransformGroup({
    name: 'compose',
    transforms: StyleDictionary.transformGroup['compose'].concat([
        'kotlin/colorTransform'
    ]),
})

StyleDictionary.registerTransformGroup({
    name: 'android',
    transforms: StyleDictionary.transformGroup['android'].concat([
        'android/colorTransform'
    ]),
})

StyleDictionary.registerTransformGroup({
    name: 'ios',
    transforms: StyleDictionary.transformGroup['ios'].concat([
        'ios/colorTransform'
    ]),
})

function colorTranslateforPlatform(jsonType, prop, platform) {
    // Metodo per lo smistamento ai metodi che trasformano i token complessi come gradient, overlay e shadow
    var colorTrasleted = ''
    switch (jsonType) {
        case 'boxShadow':
            colorTrasleted = shadowTranslatePlatform(prop, platform)
            break;
        case 'color-gradient':
            colorTrasleted = gradientTranslatePlatform(prop, platform)
            break;
        case 'color-overlay':
            colorTrasleted = overlayTranslatePlatform(prop, platform)
            break;
    }
    return colorTrasleted;
}

// Metodo per la trasfromazione dei token shadow
function shadowTranslatePlatform(prop, platform) {
    const {
        x,
        y,
        blur,
        spread,
        color,
        alpha
    } = prop.original.value
    var colorTranslate = '';
    const colorValue = colorfuls.translate(colorfuls.Color(color).setAlpha(alpha));

    switch (platform) {
        case 'web/colorTransform':
            colorTranslate = `${x}px ${y}px ${blur}px ${spread}px rgba(${colorValue.RGB}, ${alpha})`;
            break;

        case 'ios/colorTransform':
            colorTranslate = `(${colorValue.Swift}, ${x}, ${y}, ${blur}, ${spread})`;
            break;

        case 'swift/colorTransform':
            colorTranslate = `(${colorValue.Swift}, ${x}, ${y}, ${blur})`;
            break;

        case 'kotlin/colorTransform':
            colorTranslate = `(${colorValue.Flutter}, Offset(${x}f, ${y}f), ${blur}f)`;
            break;

        case 'android/colorTransform':
            colorTranslate = `(${colorValue.Flutter}, Offset(${x}f, ${y}f), ${blur}f)`;
            break;
    }
    return colorTranslate;
}

// Metodo per la trasfromazione dei token gradient
function gradientTranslatePlatform(prop, platform) {
    const {
        angle,
        c1,
        a1,
        c2,
        a2,
        c3,
        a3,
        type,
        setAlpha
    } = prop.original.value

    var colorValue1;
    var colorValue2;
    var colorValue3;

    if (setAlpha) {
        colorValue1 = colorfuls.translate(colorfuls.Color(c1).setAlpha(a1));
        colorValue2 = colorfuls.translate(colorfuls.Color(c2).setAlpha(a2));
        if (c3) {
            colorValue3 = colorfuls.translate(colorfuls.Color(c3).setAlpha(a3));
        }
    } else {
        colorValue1 = colorfuls.translate(colorfuls.Color(c1));
        colorValue2 = colorfuls.translate(colorfuls.Color(c2));
        if (c3) {
            colorValue3 = colorfuls.translate(colorfuls.Color(c3));
        }
    }

    var colorTranslate = '';

    switch (platform) {
        case 'web/colorTransform':
            colorTranslate = c3 !== undefined ? `${type}(${angle}, rgba(${colorValue1.RGBA}) ${a1}, rgba(${colorValue2.RGBA}) ${a2}, rgba(${colorValue3.RGBA}) ${a3})` : `${type}(${angle}, rgba(${colorValue1.RGBA}) ${a1}, rgba(${colorValue2.RGBA}) ${a2})`;
            break;

        case 'swift/colorTransform' || 'ios/colorTransform':
            colorTranslate = c3 !== undefined ? `[${colorValue1.Swift},${colorValue2.Swift}, ${colorValue3.Swift}]` : `[${colorValue1.Swift},${colorValue2.Swift}]`;
            break;

        case 'kotlin/colorTransform' || 'android/colorTransform':
            colorTranslate = c3 !== undefined ? `listOf(${colorValue1.Flutter}, ${colorValue2.Flutter}, ${colorValue3.Flutter})` : `listOf(${colorValue1.Flutter}, ${colorValue2.Flutter})`;
            break;
    }
    return colorTranslate;
}

function overlayTranslatePlatform(prop, platform) {
    // Metodo per la trasfromazione dei token overlay
    const {
        color,
        alpha
    } = prop.original.value
    const colorValue = colorfuls.translate(colorfuls.Color(color).setAlpha(alpha));
    var colorTranslate = '';

    switch (platform) {
        case 'web/colorTransform':
            colorTranslate = `rgba(${colorValue.RGBA})`;
            break;

        case 'swift/colorTransform' || 'ios/colorTransform':
            colorTranslate = `${colorValue.Swift}`;
            break;

        case 'kotlin/colorTransform' || 'android/colorTransform':
            colorTranslate = `${colorValue.Flutter}`;
            break;
    }
    return colorTranslate;
}


const StyleDictionaryExtended = StyleDictionary.extend(baseConfig)

StyleDictionaryExtended.buildAllPlatforms()