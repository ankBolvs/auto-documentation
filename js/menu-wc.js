'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">expense-tracking-project documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AdminModule.html" data-type="entity-link" >AdminModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AdminModule-d1a64e9ee64423e46b7a149f8b7c8bc42b87343b79bb02e17c1e0613fb39a3cc7eea5bd2a3d6d52fece1b039a83459792eb61c15580b08d6f58c2bb881500e02"' : 'data-bs-target="#xs-components-links-module-AdminModule-d1a64e9ee64423e46b7a149f8b7c8bc42b87343b79bb02e17c1e0613fb39a3cc7eea5bd2a3d6d52fece1b039a83459792eb61c15580b08d6f58c2bb881500e02"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdminModule-d1a64e9ee64423e46b7a149f8b7c8bc42b87343b79bb02e17c1e0613fb39a3cc7eea5bd2a3d6d52fece1b039a83459792eb61c15580b08d6f58c2bb881500e02"' :
                                            'id="xs-components-links-module-AdminModule-d1a64e9ee64423e46b7a149f8b7c8bc42b87343b79bb02e17c1e0613fb39a3cc7eea5bd2a3d6d52fece1b039a83459792eb61c15580b08d6f58c2bb881500e02"' }>
                                            <li class="link">
                                                <a href="components/AdminGroupsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminGroupsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AuthComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AdminModule-d1a64e9ee64423e46b7a149f8b7c8bc42b87343b79bb02e17c1e0613fb39a3cc7eea5bd2a3d6d52fece1b039a83459792eb61c15580b08d6f58c2bb881500e02"' : 'data-bs-target="#xs-injectables-links-module-AdminModule-d1a64e9ee64423e46b7a149f8b7c8bc42b87343b79bb02e17c1e0613fb39a3cc7eea5bd2a3d6d52fece1b039a83459792eb61c15580b08d6f58c2bb881500e02"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AdminModule-d1a64e9ee64423e46b7a149f8b7c8bc42b87343b79bb02e17c1e0613fb39a3cc7eea5bd2a3d6d52fece1b039a83459792eb61c15580b08d6f58c2bb881500e02"' :
                                        'id="xs-injectables-links-module-AdminModule-d1a64e9ee64423e46b7a149f8b7c8bc42b87343b79bb02e17c1e0613fb39a3cc7eea5bd2a3d6d52fece1b039a83459792eb61c15580b08d6f58c2bb881500e02"' }>
                                        <li class="link">
                                            <a href="injectables/AuthGuard.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthGuard</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/GroupRepositroy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GroupRepositroy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/RestDataSource.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RestDataSource</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-23c850aa7b3608550fe3b05fe3c91a66ff47935ccbf95708bd17f1edd39f84244fbecb0e1dfd8d871c7db48f48ea5522fea9194b41abba91a60a165d942fcd7b"' : 'data-bs-target="#xs-components-links-module-AppModule-23c850aa7b3608550fe3b05fe3c91a66ff47935ccbf95708bd17f1edd39f84244fbecb0e1dfd8d871c7db48f48ea5522fea9194b41abba91a60a165d942fcd7b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-23c850aa7b3608550fe3b05fe3c91a66ff47935ccbf95708bd17f1edd39f84244fbecb0e1dfd8d871c7db48f48ea5522fea9194b41abba91a60a165d942fcd7b"' :
                                            'id="xs-components-links-module-AppModule-23c850aa7b3608550fe3b05fe3c91a66ff47935ccbf95708bd17f1edd39f84244fbecb0e1dfd8d871c7db48f48ea5522fea9194b41abba91a60a165d942fcd7b"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-23c850aa7b3608550fe3b05fe3c91a66ff47935ccbf95708bd17f1edd39f84244fbecb0e1dfd8d871c7db48f48ea5522fea9194b41abba91a60a165d942fcd7b"' : 'data-bs-target="#xs-injectables-links-module-AppModule-23c850aa7b3608550fe3b05fe3c91a66ff47935ccbf95708bd17f1edd39f84244fbecb0e1dfd8d871c7db48f48ea5522fea9194b41abba91a60a165d942fcd7b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-23c850aa7b3608550fe3b05fe3c91a66ff47935ccbf95708bd17f1edd39f84244fbecb0e1dfd8d871c7db48f48ea5522fea9194b41abba91a60a165d942fcd7b"' :
                                        'id="xs-injectables-links-module-AppModule-23c850aa7b3608550fe3b05fe3c91a66ff47935ccbf95708bd17f1edd39f84244fbecb0e1dfd8d871c7db48f48ea5522fea9194b41abba91a60a165d942fcd7b"' }>
                                        <li class="link">
                                            <a href="injectables/ShowGroupGuard.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ShowGroupGuard</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/GroupDetailModule.html" data-type="entity-link" >GroupDetailModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-GroupDetailModule-59a95394359a82d80d86a0f367016348ba8e5f0b14d14c4f409db73f4ea87b32c8782b3b8e18a54a72adf620aa077c44eb188bffb65b9f7bed9c8a48fbaaf3fd"' : 'data-bs-target="#xs-components-links-module-GroupDetailModule-59a95394359a82d80d86a0f367016348ba8e5f0b14d14c4f409db73f4ea87b32c8782b3b8e18a54a72adf620aa077c44eb188bffb65b9f7bed9c8a48fbaaf3fd"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-GroupDetailModule-59a95394359a82d80d86a0f367016348ba8e5f0b14d14c4f409db73f4ea87b32c8782b3b8e18a54a72adf620aa077c44eb188bffb65b9f7bed9c8a48fbaaf3fd"' :
                                            'id="xs-components-links-module-GroupDetailModule-59a95394359a82d80d86a0f367016348ba8e5f0b14d14c4f409db73f4ea87b32c8782b3b8e18a54a72adf620aa077c44eb188bffb65b9f7bed9c8a48fbaaf3fd"' }>
                                            <li class="link">
                                                <a href="components/AddExpenseComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddExpenseComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AddUserComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddUserComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GroupDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GroupDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ParentGroupDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ParentGroupDetailComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ModelModule.html" data-type="entity-link" >ModelModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ModelModule-29803465e1e69c89cbaaafa1bb172695679a2b89ae32c4ccc0d1e811bd265346194701b6e8aebe5f960c12c8c1fe85e9bfd88ae4edcc7b3ea7bec1bda65fb3c2"' : 'data-bs-target="#xs-injectables-links-module-ModelModule-29803465e1e69c89cbaaafa1bb172695679a2b89ae32c4ccc0d1e811bd265346194701b6e8aebe5f960c12c8c1fe85e9bfd88ae4edcc7b3ea7bec1bda65fb3c2"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ModelModule-29803465e1e69c89cbaaafa1bb172695679a2b89ae32c4ccc0d1e811bd265346194701b6e8aebe5f960c12c8c1fe85e9bfd88ae4edcc7b3ea7bec1bda65fb3c2"' :
                                        'id="xs-injectables-links-module-ModelModule-29803465e1e69c89cbaaafa1bb172695679a2b89ae32c4ccc0d1e811bd265346194701b6e8aebe5f960c12c8c1fe85e9bfd88ae4edcc7b3ea7bec1bda65fb3c2"' }>
                                        <li class="link">
                                            <a href="injectables/GroupRepositroy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GroupRepositroy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/RestDataSource.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RestDataSource</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserRepository.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserRepository</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ViewModule.html" data-type="entity-link" >ViewModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ViewModule-d686bcf2d7c54a756b3e61a2f3aff1450f159c6277565b78d7ad0878f54ac392a8e8e027f097258a4cca61b48a91f1af87b348f9dda2af198c0ab72a7da316af"' : 'data-bs-target="#xs-components-links-module-ViewModule-d686bcf2d7c54a756b3e61a2f3aff1450f159c6277565b78d7ad0878f54ac392a8e8e027f097258a4cca61b48a91f1af87b348f9dda2af198c0ab72a7da316af"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ViewModule-d686bcf2d7c54a756b3e61a2f3aff1450f159c6277565b78d7ad0878f54ac392a8e8e027f097258a4cca61b48a91f1af87b348f9dda2af198c0ab72a7da316af"' :
                                            'id="xs-components-links-module-ViewModule-d686bcf2d7c54a756b3e61a2f3aff1450f159c6277565b78d7ad0878f54ac392a8e8e027f097258a4cca61b48a91f1af87b348f9dda2af198c0ab72a7da316af"' }>
                                            <li class="link">
                                                <a href="components/CreateGroupComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateGroupComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ShowGroupsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ShowGroupsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/Expense.html" data-type="entity-link" >Expense</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GroupDataService.html" data-type="entity-link" >GroupDataService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GroupRepositroy.html" data-type="entity-link" >GroupRepositroy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RestDataSource.html" data-type="entity-link" >RestDataSource</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ShowGroupGuard.html" data-type="entity-link" >ShowGroupGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/User.html" data-type="entity-link" >User</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserRepository.html" data-type="entity-link" >UserRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Group.html" data-type="entity-link" >Group</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});