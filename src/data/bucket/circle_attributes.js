// @flow
import {createLayout} from '../../util/struct_array.js';

import type {StructArrayLayout} from '../../util/struct_array.js';

export const circleAttributes: StructArrayLayout = createLayout(
    [{ name: "a_pos", components: 2, type: "Float32" }],
    4
);

export const circleGlobeAttributesExt: StructArrayLayout = createLayout([
    {name: 'a_pos_3', components: 3, type: 'Int16'},
    {name: 'a_pos_normal_3', components: 3, type: 'Int16'}
]);

export const {members, size, alignment} = circleAttributes;
