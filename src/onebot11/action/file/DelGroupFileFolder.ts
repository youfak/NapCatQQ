import { FromSchema, JSONSchema } from 'json-schema-to-ts';
import BaseAction from '../BaseAction';
import { ActionName } from '../types';
import { NTQQGroupApi, NTQQMsgApi, NTQQUserApi } from '@/core/apis';

const SchemaData = {
  type: 'object',
  properties: {
    group_id: { type: ['string', 'number'] },
    folder_id: { type: 'string' },
  },
  required: ['group_id', 'folder_id']
} as const satisfies JSONSchema;

type Payload = FromSchema<typeof SchemaData>;

export class DelGroupFileFolder extends BaseAction<Payload, any> {
  actionName = ActionName.DelGroupFileFolder;
  PayloadSchema = SchemaData;
  protected async _handle(payload: Payload) {
    return (await NTQQGroupApi.DelGroupFileFolder(payload.group_id.toString(), payload.folder_id)).groupFileCommonResult;
  }
}
