# Configurable Widget
The project contains a MFE with the associated MFE configuration screen. This bundle is compatible with Entando 7.1.

1. copy bundle_src content to bundle dir
2. ent prj init
3. ent prj fb (--all)
4. ent prj pbs-init
5. ent prj fe-push (--force)
6. attach ent to an entando platform (ent attach-kubeconfig config-file)
7. ent prj deploy
8. ent prj install --conflict-strategy=OVERRIDE
