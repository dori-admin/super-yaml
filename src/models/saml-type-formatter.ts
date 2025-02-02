import { SymlType } from "../types/syntax";
import { parseParam } from "../utils/syntax.utils";
import { isString } from "../utils/general.utils";
import { ObjectOf } from "../types/common.types";
import { cloneDeepWith } from "lodash";

export class SamlTypeFormatter {
  //TODO: Migrate to service
  public static formatTemplate(
    type: SymlType,
    userObject: ObjectOf<any>
  ): ObjectOf<any> {
    return cloneDeepWith<object>(type.properties, (value) => {
      if (isString(value)) {
        const symlParameter = parseParam(value);
        if (symlParameter) {
          if (!userObject[symlParameter.key] && !symlParameter.defaultValue)
            throw new Error(`Missing '${symlParameter.key}' property`);
          return userObject[symlParameter.key] || symlParameter.defaultValue;
        }
      }
    });
  }
}
