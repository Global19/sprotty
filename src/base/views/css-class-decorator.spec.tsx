/********************************************************************************
 * Copyright (c) 2019 TypeFox and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/

 /** @jsx svg */
import { svg } from 'snabbdom-jsx';

import "mocha";
import { expect } from "chai";
import { CssClassDecorator } from './css-class-decorator';
import { SModelElement } from '../model/smodel';

describe('CssClassDecorator', () => {
    it('classes are not overwritten', () => {
        const vnode = <g class-foo={true}/>;
        expect(vnode.data!.class!.foo).to.be.true;
        expect(vnode.data!.class!.bar).to.be.undefined;
        const snode = new SModelElement()
        snode.cssClasses = ['bar']
        new CssClassDecorator().decorate(vnode, snode)
        expect(vnode.data!.class!.foo).to.be.true;
        expect(vnode.data!.class!.bar).to.be.true;
    });
});