
//
// StyleDictionaryColor.m
//

// Do not edit directly
// Generated on Mon, 20 Nov 2023 18:23:52 GMT


#import "StyleDictionaryColor.h"

@implementation StyleDictionaryColor

+ (UIColor *)color:(StyleDictionaryColorName)colorEnum{
  return [[self values] objectAtIndex:colorEnum];
}

+ (NSArray *)values {
  static NSArray* colorArray;
  static dispatch_once_t onceToken;

  dispatch_once(&onceToken, ^{
    colorArray = @[
[UIColor colorWithRed:0.114f green:0.725f blue:0.329f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.702f green:0.702f blue:0.702f alpha:1.000f],
[UIColor colorWithRed:0.098f green:0.078f blue:0.078f alpha:1.000f],
[UIColor colorWithRed:0.141f green:0.141f blue:0.141f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.502f blue:0.412f alpha:1.000f],
[UIColor colorWithRed:0.667f green:0.133f blue:0.310f alpha:1.000f],
[UIColor colorWithRed:0.886f green:0.388f blue:0.204f alpha:1.000f],
[UIColor colorWithRed:0.184f green:0.427f blue:0.835f alpha:1.000f],
[UIColor colorWithRed:0.114f green:0.725f blue:0.329f alpha:1.000f],
[UIColor colorWithRed:0.114f green:0.725f blue:0.329f alpha:1.000f],
[UIColor colorWithRed:0.114f green:0.725f blue:0.329f alpha:1.000f],
[UIColor colorWithRed:0.114f green:0.725f blue:0.329f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.702f green:0.702f blue:0.702f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.114f green:0.725f blue:0.329f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.098f green:0.078f blue:0.078f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.000f blue:0.000f alpha:1.000f]
    ];
  });

  return colorArray;
}

@end
