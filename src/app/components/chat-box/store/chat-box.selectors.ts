import { CHAT_BOX_FEATURE_KEY } from '@app/components/chat-box/store/chat-box.reducer';
import { createFeatureSelector } from '@ngrx/store';


export const selectChatBoxFeature = createFeatureSelector(CHAT_BOX_FEATURE_KEY);
