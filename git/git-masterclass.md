# Git Notes - Git Masterclass
Git masterclass - 08/08/2017

These notes are from Summer of Tech, as well as my own study.

Andy Newport and Steve Purcell, Powershop.

# Git 102
- SHA-1: used widely in git.
- Content addressable system. The content becomes the index with hashing.

EG: git cat-file -p

- objects, refs within .git/ are what is stored.

## Commits
- Save current state of directory.
- Commits contain Tree objects. These trees maps blobs and other trees.
- Commits also store author and committer.
- Each of these points, commits, trees, blobs and other trees, has hashes, which encode each level below. So, if you changed an internal file, the outer hash would change.
- Commits also contain 'parent' references, which track what came before.

## Branches
- Stored in .git/refs/heads
- All it will be is a current SHA.

## HEAD
- Reference to current working branch.
- File in /.git contains a reference to the branch.
  `ref: refs/heads/master`
- HEAD writes the new changes.

## Merging
- Looks for latest common ancestor of branches to be merged.
- Fast-forward merge, in simple cases.
- Merge commits occur when there is other data in the mix (aside from the latest and new code). CREATES NEW COMMIT.

## Remotes
- Another set of data, separate from current working local branch.
- /refs/remotes

## Cherry Pick
- Git saves WHOLE FILES, not just diffs.
- Diffs can be taken from between commits, to make patch files.
- Cherry picking will apply a diff patch, and create a new branch.

## Revert
- Looks at the changes to get back to a previous state.
- Creates a new branch, after applying a diff patch.

## Rebase
- Repeatedly applying cherry picking in order along a path of commits to the desired place on the rebased branch.

## Garbage collection
- Git will delete objects that aren't referenced anymore.
- Will attempt to traverse through branches and refs to find origin of objects, and will delete those objects that aren't linked in.
- If you delete a branch, for example, and the objects become referenced, those will be garbage collected eventually to save space.
- Roughly every two weeks, depending on config.

## Reflog
- Keeps about two months of changes.
- Google how to use it, it can save your ass.

## Further Resources
- Git for ages 4 and up
- Try git
- Think like a git
- Pro git book
