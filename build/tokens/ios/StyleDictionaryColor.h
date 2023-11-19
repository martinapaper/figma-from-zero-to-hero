
//
// StyleDictionaryColor.h
//

// Do not edit directly
// Generated on Sun, 19 Nov 2023 15:43:25 GMT


#import <UIKit/UIKit.h>

typedef NS_ENUM(NSInteger, StyleDictionaryColorName) {
ColorGlobalPrimary100,
ColorGlobalSecondary100,
ColorGlobalSecondary90,
ColorGlobalSecondary0,
ColorGlobalSecondary10,
ColorGlobalSemanticSuccess100,
ColorGlobalSemanticAlert100,
ColorGlobalSemanticWarning100,
ColorGlobalSemanticInfo100,
ColorAliasInteractivePrimaryDefault,
ColorAliasInteractivePrimaryHover,
ColorAliasInteractivePrimaryFocus,
ColorAliasInteractivePrimaryPressed,
ColorAliasInteractiveSecondaryDefault,
ColorAliasInteractiveSecondaryHover,
ColorAliasInteractiveSecondaryFocus,
ColorAliasInteractiveSecondaryPressed,
ColorAliasTextColorPrimary100,
ColorAliasTextColorSecondary100,
ColorAliasBackgroundColorSecondary0,
ColorAliasBorderSecondary100,
ColorSpecificTokenSpeific
};

@interface StyleDictionaryColor : NSObject
+ (NSArray *)values;
+ (UIColor *)color:(StyleDictionaryColorName)color;
@end
