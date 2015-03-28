//
//  YologramManager.m
//  yologram
//
//  Created by Pete Hunt on 3/27/15.
//  Copyright (c) 2015 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <AssetsLibrary/AssetsLibrary.h>
#import "YologramManager.h"

@implementation YologramManager

- (void)getImageData:(NSString *)url withCallback:(RCTResponseSenderBlock)callback
{
  RCT_EXPORT();
  
  ALAssetsLibrary *assetLibrary = [[ALAssetsLibrary alloc] init];
  NSURL* aURL = [NSURL URLWithString:url];
  
  [assetLibrary assetForURL:aURL resultBlock:^(ALAsset *asset) {
    ALAssetRepresentation *rep = [asset defaultRepresentation];
    Byte *buffer = (Byte*)malloc(rep.size);
    NSUInteger buffered = [rep getBytes:buffer fromOffset:0.0 length:rep.size error:nil];
    NSData *data = [NSData dataWithBytesNoCopy:buffer length:buffered freeWhenDone:YES];//this is NSData may be what you want
    NSString *base64 = [data base64EncodedStringWithOptions:0];
    callback(@[base64]);
  } failureBlock:^(NSError *err) {
    NSLog(@"Error: %@",[err localizedDescription]);
  }];
}

@end
